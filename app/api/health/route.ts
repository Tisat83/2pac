export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const startedAt = Date.now()

function bytesToMB(n: number) {
  return Math.round((n / 1024 / 1024) * 100) / 100
}

export async function GET() {
  const mu = process.memoryUsage()
  const payload = {
    status: 'ok',
    app: '2pac.ru',
    env: (process.env.NODE_ENV || 'development'),
    node: process.version,
    commit: process.env.GIT_SHA || process.env.NEXT_PUBLIC_GIT_SHA || null,
    systemTime: new Date().toISOString(),
    uptimeSec: Math.round(process.uptime()),
    memory: {
      rssMB: bytesToMB(mu.rss),
      heapUsedMB: bytesToMB(mu.heapUsed),
      externalMB: 'external' in mu ? bytesToMB((mu as any).external) : undefined
    },
    flags: {
      runtime,
      dynamic
    }
  }
  return Response.json(payload, { status: 200 })
}
