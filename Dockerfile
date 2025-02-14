FROM node:18-alpine as build

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18-alpine as production
WORKDIR /home/app
COPY --from=build /home/app ./
EXPOSE 3000
CMD yarn start -H 0.0.0.0 -p 3000