# syntax=docker/dockerfile:1.7

# ---------- deps: кэшируем npm ci ----------
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Кэш npm между билдами
RUN --mount=type=cache,target=/root/.npm npm ci

# ---------- builder: кэшируем .next/cache ----------
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Кэш сборки Next.js
RUN --mount=type=cache,target=/root/.next/cache npm run build

# ---------- runner: standalone ----------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Next standalone: не нужен node_modules и next.config.* в рантайме
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
