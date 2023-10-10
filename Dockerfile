# Use Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Expose the port your application will listen on
EXPOSE 3000

# Start your application
CMD ["npm", "run", "dev"]
