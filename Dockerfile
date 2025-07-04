# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "run", "start:prod"]
