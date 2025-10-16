# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package.json package.json
RUN npm install --production=false
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
