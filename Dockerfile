# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install Expo CLI globally
RUN npm install -g expo-cli

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the default Expo port
EXPOSE 8081

# Start the Expo development server
CMD ["npx", "expo", "start", "--host", "0.0.0.0"] 