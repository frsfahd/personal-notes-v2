# syntax=docker/dockerfile:1

# Stage 1: Build the npm project
FROM node:18.16.0-alpine3.17 AS npm-builder
WORKDIR /app
# Copy package files
COPY package*.json ./
RUN npm install
# Copy source code
COPY . .
# Build the application
RUN npm run build

# Stage 2
FROM node:18.16.0-alpine3.17
WORKDIR /app
# Install serve globally
RUN npm install -g serve
# Copy built application from build stage
COPY --from=npm-builder /app/dist ./dist
# ENV PORT=8080 DB_URL=mongodb://192.168.224.1:27017 DB_NAME=shortin_db DB_COLLECTION=links
EXPOSE 3000
# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]
