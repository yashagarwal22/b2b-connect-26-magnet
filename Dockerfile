# syntax=docker/dockerfile:1
# Multi-stage build for the Next.js 15 standalone server (Coolify / Docker).

# ---- deps: install with the lockfile only (cached unless deps change) ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- builder: compile. NEXT_PUBLIC_* are inlined into the client bundle here,
#      so they MUST be present at build time (passed as --build-arg by Coolify). ----
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY \
    NEXT_PUBLIC_POSTHOG_HOST=$NEXT_PUBLIC_POSTHOG_HOST \
    NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner: minimal runtime image, non-root, runs the standalone server ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
