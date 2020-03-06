FROM node:13.10.1

RUN mkdir -p /app
WORKDIR /app

RUN yarn config set cache-folder /root/.yarn-cache && \
    yarn global add gatsby-cli@2.8.22 && \
    yarn cache clean

CMD yarn develop
