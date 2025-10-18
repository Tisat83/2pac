// Force Node runtime and disable static optimization for this route
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const { COMMIT, VERSION, SERVICE_NAME } = process.env;

  return Response.json(
    {
      status: 'ok',
      service: SERVICE_NAME || '2pac.ru',
      commit: COMMIT ?? null,
      version: VERSION ?? null,
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    }
  );
}
