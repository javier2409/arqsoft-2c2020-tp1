FROM node:alpine3.12
WORKDIR /project
COPY app.js ./
COPY package.json ./
RUN npm install
CMD ["npm", "start"]