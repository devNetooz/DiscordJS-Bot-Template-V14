# DiscordJS-Bot-Template-V14

[![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue.svg)](https://discord.js.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-20.11+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📝 Sobre o Projeto

Este é um **template de bot para Discord.js v14**, desenvolvido com o intuito de ser **gratuito** e **educacional**. Nosso foco é ajudar desenvolvedores iniciantes a entenderem como funcionam os bots no Discord.js, oferecendo uma base sólida para estudos e desenvolvimento. O projeto **não visa fins lucrativos** e pode ser utilizado por todos, seja para aprendizado, seja para servir de ponto de partida para criações mais avançadas.

### 🎯 Objetivos

- **Educação**: Fornecer uma base de bot simples e clara para aprendizado de Discord.js.
- **Gratuito**: Qualquer pessoa pode baixar e usar sem restrições.
- **Fácil personalização**: Código modular e de fácil entendimento.

> 💡 Este projeto é ideal para quem quer praticar **JavaScript** e entender melhor a integração do Discord com a API da Discord.js.

## 🚀 Requisitos


Antes de começar a desenvolver ou usar este template, você precisará dos seguintes itens instalados:

- Um editor de código (recomendamos o **[Visual Studio Code](https://code.visualstudio.com/)**)
- **[Node.js 20.11+](https://nodejs.org/)** ou superior (ou **[Bun](https://bun.sh/)** como alternativa)
- Conhecimento básico em **lógica de programação**
- Conhecimento básico em **JavaScript**
- Conhecimento básico em **Discord.js**

## 📖 Como começar

1. Clone este repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Obtenha a token do seu bot:

No portal do discord, vá em desenvolvedor [CLIQUE AQUI!](https://discord.com/developers/applications)

![image](https://i.imgur.com/crCZOCt.png)

2. Dê um nome para seu bot e clique em criar.

![image2](https://i.imgur.com/DziZQL0.png)

3. Ative as intents do seu bot.

![image3](https://i.imgur.com/XbzVYpg.png)

4. Resete a token do seu bot e copie a nova token.

![image4](https://i.imgur.com/TfMj4YH.png)

5. Após isso, vá até o arquivo .env e cole a token do seu bot no campo clientToken="TOKEN".

6. Para colocar o bot no seu servidor, você deve ir em OAuth2, selecionar os scopes BOT e Aplications.commands e logo abaixo vai gerar uma url, e cole no seu navegador ou em algum chat no discord pra colocar o bot no seu servidor.

![image5](https://i.imgur.com/7adtyqW.png)
![image6](https://i.imgur.com/s3SNpxq.png)

7. Pronto! Agora é só rodar o bot com o comando
 ```bash
   node .
   ```