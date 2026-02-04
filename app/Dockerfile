FROM node:24.13.0-bookworm


WORKDIR /app

RUN npm install -g sirv-cli
COPY ./public ./public

EXPOSE 8080
CMD [ "sirv", "public", "--host", "--single" ]
