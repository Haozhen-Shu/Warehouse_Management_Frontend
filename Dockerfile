FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-deps /usr/src/app/dist/*/ /usr/share/nginx/html/
COPY */nginx.conf /etc/nginx/conf*/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]