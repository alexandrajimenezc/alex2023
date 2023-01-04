FROM node:lts-slim
WORKDIR /usr/src/
COPY . .
RUN apt-get update && apt-get install -y curl
RUN npm install 
