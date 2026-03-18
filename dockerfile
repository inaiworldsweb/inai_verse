FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with caching
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Create optimized nginx config for SPA
RUN rm -f /etc/nginx/conf.d/default.conf && \
    printf '%s\n' \
    'server {' \
    '  listen 80;' \
    '  server_name _;' \
    '  root /usr/share/nginx/html;' \
    '  index index.html;' \
    '  gzip on;' \
    '  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;' \
    '  location / {' \
    '    try_files $uri $uri/ /index.html;' \
    '    add_header Cache-Control "no-cache";' \
    '  }' \
    '  location /static/ {' \
    '    expires 1y;' \
    '    add_header Cache-Control "public, immutable";' \
    '  }' \
    '}' \
    > /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80

# Use non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

USER nextjs

CMD ["nginx", "-g", "daemon off;"]