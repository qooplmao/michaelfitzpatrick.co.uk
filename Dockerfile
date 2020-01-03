FROM node:8.12

RUN mkdir -p /app
WORKDIR /app

RUN yarn config set cache-folder /root/.yarn-cache && \
    yarn global add gatsby@2.0.1 && \
    yarn cache clean

CMD yarn develop
