FROM node:13-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .
# Copiar os arquivos do diretório atual (primeiro argumento) para o diretório /home/node/app (segundo arquimento)

COPY --chown=node:node . .
# Copia as permissões do diretório de desenvolvimento do  projeto /home/develop/..., aplicando-as para o diretório da imagem

USER node
# Definindo um usuário 'node'

EXPOSE 3333
# Exponto o container para a porta 8080

CMD [ "node", "server.js" ]
# Executar comando no CMD "node app.js"
