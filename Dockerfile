# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copia os arquivos de configuração e instala as dependências
COPY package.json package-lock.json* ./
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Realiza o build da aplicação
RUN npm run build

# Stage 2: Imagem para produção
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copia os arquivos da build do stage anterior
COPY --from=builder /app ./

# Expõe a porta que o Next.js utiliza (por padrão 3000)
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
