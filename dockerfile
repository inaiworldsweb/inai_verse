FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

RUN npm ci || npm install

# Copy source code
COPY . .

# Debug: Show what we're building
RUN ls -la && echo "Node version:" && node --version && echo "NPM version:" && npm --version

# Build with error handling
RUN npm run build || (echo "Build failed, checking for issues..." && ls -la && cat package.json && exit 1)

# Production stage
FROM nginx:alpine

RUN apk add --no-cache curl

# Create SPA-friendly nginx config directly (no nginx.conf file needed)
RUN rm -f /etc/nginx/conf.d/default.conf && \
    printf '%s\n' \
    'server {' \
    '  listen 80;' \
    '  server_name _;' \
    '  root /usr/share/nginx/html;' \
    '  index index.html;' \
    '  location / {' \
    '    try_files $uri $uri/ /index.html;' \
    '  }' \
    '}' \
    > /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]