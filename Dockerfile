FROM node:18-alpine

# Expose the port the app runs on
EXPOSE 8080

# Set environment variables
ENV PORT=8080 \
    JWT_SECRET=simplileap-competion-project-key \
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

# Set the working directory
WORKDIR /usr/app

# Install dependencies
COPY package*.json ./
RUN npm install sequelize-cli -g
RUN npm install pm2 -g
COPY . .
RUN npm cache clean --force && rm -rf node_modules && npm install

# Command to run the application
CMD [ "node", "server.js" ]
