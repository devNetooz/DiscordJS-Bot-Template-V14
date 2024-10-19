const { Client, Collection, GatewayIntentBits } = require("discord.js");
const handler = require("./handler/index.js");
require('dotenv').config();
const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
});

module.exports = client;
client.slash = new Collection();

// Carregar eventos, slash commands
handler.loadEvents(client);
handler.loadSlashCommands(client);

// LOGS DE DEPURAÇÃO
process.on("uncaughtException", (err) => {
	console.log("Error: Uncaught Exception:\n" + err);
});
process.on("unhandledRejection", (reason, promise) => {
    console.log("Error: unhandledRejection\n" + promise + "\nreason:\n" + reason.message);
});

// Logar na sua Token do bot
client.login(process.env.clientToken);
