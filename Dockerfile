FROM node:alpine
WORKDIR /app
COPY ./packages/backend/package.json .
RUN yarn install
ENV NODE_ENV="production"
EXPOSE 3002
ADD ./packages/backend .
CMD yarn start
