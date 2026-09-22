#Stage 1
FROM node:18.12-alpine AS build 
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN  npm install 
COPY . .
RUN npm  run build  
##STAGE####
FROM  nginx:1.17.1-alpine
COPY  nginx.conf  /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/oems-project  /usr/share/nginx/html