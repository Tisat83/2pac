export async function GET() {
  return Response.json({
    status: 'ok',
    app: '2pac',
    timestamp: new Date().toISOString(),
  })
}
