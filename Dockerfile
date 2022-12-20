from node:18 AS base

RUN npm install -g @angular/cli

## === SDK === ##
FROM base AS SDK

EXPOSE 4200

WORKDIR /app

#COPY Angular/POC-SVG /app

#RUN ng build
