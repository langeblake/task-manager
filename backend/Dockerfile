# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
