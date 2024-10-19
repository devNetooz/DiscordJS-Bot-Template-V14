const Discord = require("discord.js")

module.exports = {
    name: "teste", 
    description: "Teste de comando", 
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        interaction.reply({ content: "Teste de comando", ephemeral: true })
  },
};
