import { NextResponse } from "next/server";
import { getAccount } from "@/lib/accounts";
import { toTeaser } from "@/lib/types";

/** GET → above-gate (teaser) config only. The payoff is never served here (spec §11.3). */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const account = await getAccount(slug);
  if (!account) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json(toTeaser(account));
}
