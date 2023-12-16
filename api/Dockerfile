ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
EXPOSE 5000

FROM base as dev
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "server.js"]

FROM base as prod
ENV NODE_ENV production
COPY package.json .
RUN npm install --only=production
COPY . .
CMD ["node", "server.js"]
