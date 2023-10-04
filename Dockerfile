FROM node:20.5.1-alpine as build
ENV NODE_ENV development

WORKDIR /app

# Installing dependencies
COPY package*.json ./

RUN npm install 

RUN npm install -g serve --save

COPY . .


# Running the app
CMD [ "npm","run","start" ]
