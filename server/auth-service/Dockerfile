FROM node:14-alpine

WORKDIR /usr/src/app

ENV NODE_ENV dev

COPY package*.json ./

RUN npm install

RUN npm i @nestjs/cli -g

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]




