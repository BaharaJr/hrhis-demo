FROM node:14.16.1-alpine3.12
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "start" ]