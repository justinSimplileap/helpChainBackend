FROM node:18-alpine
EXPOSE 80
EXPOSE 8000

ENV JWT_SECRET=simplileap-competion-project-key \ 
JWT_EXPIRES_IN=1d \
NODE_ENV=development \
DEPLOYMENT_TYPE="qa" \
NODE_SERVER="server" \
EXC_ROOT="http://localhost:3000" \
DB_USERNAME=postgres \
DB_PASSWORD=admin \
DB_DATABASENAME=competition_db \
DB_HOST=localhost \
DB_PORT=5432 
  
WORKDIR /usr/app

COPY package*.json ./
RUN npm install sequelize-cli -g
RUN npm install pm2 -g

COPY . .
RUN npm add ./lib/exchange/
RUN npm cache clean --force && rm -rf node_modules && npm install

# RUN chmod +x ./startup.sh 

CMD [ "node", "server.js" ]
