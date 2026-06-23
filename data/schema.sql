-- B2B Connect 2026 lead magnet — Supabase schema (spec §11.4)
-- Access is server-only via the service-role key. RLS on, no anon policies.

create table if not exists accounts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  company_name text not null,
  aliases text[] default '{}',
  domains text[] default '{}',          -- email/web domains for auto-resolving visitors
  vertical text,
  revenue_band text,
  role_emphasis text,
  active_requirement boolean default false,
  thesis_variant text,
  wedge text,
  stack_flags jsonb,
  plays jsonb,
  case_studies jsonb,
  roi_brackets jsonb,
  config jsonb not null,            -- the full resolved AccountConfig (teaser + payoff)
  published boolean default false,
  updated_at timestamptz default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  email text not null,
  company_slug text,
  company_name text,
  vertical text,
  revenue_band text,
  role text,
  active_requirement boolean,
  plays_shown jsonb,
  consent boolean default false,
  source text,
  utm jsonb,
  hubspot_contact_id text,
  synced_at timestamptz
);

-- Inbound requests from companies we don't have a prepared profile for (contact-us capture).
create table if not exists contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  company text not null,
  role text,
  message text,
  consent boolean default false,
  source text,
  utm jsonb,
  hubspot_contact_id text,
  synced_at timestamptz
);

alter table accounts enable row level security;
alter table leads enable row level security;
alter table contact_requests enable row level security;
-- No policies created on purpose: only the service-role key (server) bypasses RLS.

create index if not exists leads_email_idx on leads (email);
create index if not exists accounts_slug_idx on accounts (slug);
create index if not exists contact_requests_email_idx on contact_requests (email);
