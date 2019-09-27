FROM nginx:stable-alpine

RUN ls

COPY build/* /usr/share/nginx/html/

RUN rm -v /etc/nginx/conf.d/default.conf

EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf