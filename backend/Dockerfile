FROM node:22 as base
LABEL authors="wygnd"
WORKDIR /app
COPY package*.json ./

FROM base as dev
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev"]

FROM node:22-apline as apline
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
CMD ["node", "dist/main.js"]