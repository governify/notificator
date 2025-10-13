FROM node:21-alpine

COPY . .
RUN npm install

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

CMD [ "npm", "start" ]