# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm i
COPY ./ ./
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
