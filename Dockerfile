FROM node:14.18.1
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn
COPY . .

RUN yarn run build
EXPOSE 8080
CMD ["node", "./build/src/index.js"]
