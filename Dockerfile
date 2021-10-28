FROM node as build-stage

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx as production-stage

# Nginx config
RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Make our shell script executable
RUN chmod +x env.sh

CMD [ "/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\"" ]