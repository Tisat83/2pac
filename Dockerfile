# ---------- Build stage ----------
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install --frozen-lockfile && npm run build

# ---------- Production image ----------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]
