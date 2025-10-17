export async function GET() {
  const { COMMIT, VERSION, SERVICE_NAME } = process.env;

  return Response.json({
    status: 'ok',
    service: SERVICE_NAME || '2pac.ru',
    commit: COMMIT ?? null,
    version: VERSION ?? null,
    timestamp: new Date().toISOString(),
  });
}
