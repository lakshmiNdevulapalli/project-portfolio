FROM node:15.8.0-alpine3.10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]