FROM node:latest

ENV API_URL="http://localhost:3000/"

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 80

CMD ["npm", "start"]
