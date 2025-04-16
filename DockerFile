# Use Node.js official image as base
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
