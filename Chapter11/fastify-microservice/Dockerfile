FROM node:14

WORKDIR "/app"

RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

COPY package*.json ./

RUN npm install --production

COPY . /app

ENV PORT 3000

EXPOSE 3000

USER node

CMD ["npm", "start"]
