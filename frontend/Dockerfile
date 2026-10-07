# Development stage (Vite + HMR)
FROM node:22-alpine AS development

WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production build stage
FROM development AS builder
ARG VITE_WHATSAPP_NUMBER
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /src/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
