FROM node:18-alpine

# Set environment variables
ENV JWT_SECRET=simplileap-competion-project-key \
    JWT_EXPIRES_IN=1d \
    NODE_ENV=development \
    DEPLOYMENT_TYPE="qa" \
    NODE_SERVER="server" \
    EXC_ROOT="http://localhost:3000" \
    DB_USERNAME=postgres \
    DB_PASSWORD=ZAQ!2wsxCDE#4rfv \
    DB_DATABASENAME=postgres \
    DB_HOST=34.122.183.73 \
    DB_PORT=5432 \
    PORT=8080

# Set working directory
WORKDIR /usr/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install sequelize-cli -g && \
    npm install pm2 -g && \
    npm install && \
    npm cache clean --force

# Copy application code
COPY . .

# Expose port
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
