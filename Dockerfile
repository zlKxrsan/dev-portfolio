# Verwende ein leichtgewichtiges Node.js-Image
FROM node:20-alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den restlichen Anwendungscode
COPY . .

# Baue die Next.js-Anwendung für die Produktion
RUN npm run build

# Exponiere den Port, auf dem die App läuft
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start"]
