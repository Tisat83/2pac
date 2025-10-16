import type { NextRequest } from "next/server";
export const runtime = "nodejs";
export async function GET(_req: NextRequest) {
  const body = {
    status: "ok",
    service: "new-next-pwa-starter",
    timestamp: "2025-10-16T07:48:31.395011Z",
    commit: process.env.GIT_SHA || null,
    version: process.env.APP_VERSION || null
  };
  return Response.json(body, { status: 200 });
}
