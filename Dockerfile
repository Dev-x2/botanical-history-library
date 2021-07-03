FROM node:latest
WORKDIR /app
COPY ./server .
RUN npm run deploy
ENTRYPOINT ["npm", "start"]
