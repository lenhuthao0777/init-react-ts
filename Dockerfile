FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "build" ]


FROM nginx:1.9.15-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000:80
CMD [ "nginx", "-g", "daemon off;" ]