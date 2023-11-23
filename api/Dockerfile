FROM node:20

WORKDIR app/

COPY package.json .

RUN npm install
RUN npx sequelize db:migrate

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
