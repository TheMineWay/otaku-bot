FROM node:18.16-alpine3.17
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Build image
RUN npm run build

# MIGHT CHANGE DEPENDING ON .ENV CONFIG
EXPOSE 4000
CMD [ "node", "dist/main.js" ]