# Dependencies stage
FROM node:18-alpine As deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
ENV NEXT_TELEMETRY_DISABLED 1

COPY package.json ./
COPY package-lock.json ./

RUN npm install --verbose --omit-dev

# Build stage
FROM node:18-alpine As builder
WORKDIR /usr/src/app
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

RUN NODE_ENV=production npm run build && npm prune --production

# Runner stage
FROM node:18-alpine As production
WORKDIR /usr/src/app
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./        
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

USER 1001
EXPOSE 3000
ENV PORT 3000

# Start the server using the production build
CMD ["node", "server.js"]