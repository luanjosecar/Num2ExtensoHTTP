FROM node:12

WORKDIR /servidorHttp

COPY packege*.json ./

RUN npm install

RUN npm add express

COPY . .

ENV POR=3000

EXPOSE 3000

CMD ["npm", "start"]