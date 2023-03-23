FROM arm64v8/node:18

# Working Dir
WORKDIR /usr/src/client

# Copy Package Json Files
COPY package*.json .

# Install Files
RUN npm install

# Copy Source Files
COPY . .

# Expose port
EXPOSE 3002

# Run Command
CMD ["npm", "start"]