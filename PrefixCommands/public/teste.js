const Discord = require("discord.js");

module.exports = {
  name: "teste",
  description: "Teste de comando",
  aliases: ["teste"],
  run: async (client, message, args) => {
    message.reply("Teste de comando");
  },
};