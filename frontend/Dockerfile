# Build phase
FROM node:lts AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve phase using 'serve'
FROM node:lts

WORKDIR /app

RUN npm install -g serve
COPY --from=build /app/dist /app/dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
