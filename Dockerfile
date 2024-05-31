###################
# BUILD STAGE
###################

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./next.config.mjs ./

RUN npm install --verbose

COPY . .

RUN npm run build

###################
# PRODUCTION STAGE
###################
FROM node:18-alpine As production

WORKDIR /usr/src/app

# Copy the bundled code from the build stage to the production image
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY package.json package-lock.json next.config.mjs ./

RUN npm install --verbose --only=production

ARG PORT=3000
ARG NODE_ENV=production
ENV NODE_ENV production
ENV NODE_ENV=${NODE_ENV}
EXPOSE ${PORT}

# Start the server using the production build
CMD ["npm", "run", "start"]