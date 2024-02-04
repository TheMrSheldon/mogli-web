########################
# Build Container      #
########################
FROM node:latest AS build
WORKDIR /project
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci --legacy-peer-deps

COPY tsconfig.json tsconfig.json
COPY public/ public
COPY src/ src
COPY .env.production .env.production
RUN npm run build


########################
# Production Container #
########################
FROM alpine:latest
RUN apk add --update --no-cache \
	lighttpd \
	lighttpd-mod_auth \
  && rm -rf /var/cache/apk/*

COPY --from=build /project/build/ /var/www/localhost/htdocs

COPY lighttpd.conf lighttpd.conf

EXPOSE 80

CMD ["lighttpd", "-D", "-f", "lighttpd.conf"]