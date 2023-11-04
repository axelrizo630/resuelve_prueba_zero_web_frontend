# Base image
FROM node:21-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install server
RUN npm install -g serve

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Expose port 3000
CMD ["serve", "-s", "-l", "4000", "dist/" ]