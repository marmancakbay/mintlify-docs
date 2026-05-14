FROM node:20-slim

WORKDIR /app

RUN npm install -g mintlify@latest

COPY . .

EXPOSE 3333

CMD ["mintlify", "dev", "--host", "0.0.0.0", "--port", "3333"]
