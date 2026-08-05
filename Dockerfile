# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies if package.json exists
RUN if [ -f package.json ]; then npm install; fi

# Expose application port
EXPOSE 3000

# Default command
CMD ["npm", "--version"]
