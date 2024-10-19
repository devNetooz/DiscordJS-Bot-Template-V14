const { InteractionType, ChannelType } = require("discord.js");

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (interaction.type !== InteractionType.ApplicationCommand) return;

        const command = client.slash.get(interaction.commandName);
        if (!command) {
            return interaction.reply({ content: 'Não consegui executar este comando', ephemeral: true });
        }

        if (interaction.channel.type === ChannelType.DM) {
            return interaction.reply({ content: `Não tenho suporte em comandos de Privado.`, ephemeral: true });
        }

        const args = interaction.options.data.reduce((acc, option) => {
            if (option.type === 'SUB_COMMAND') {
                if (option.name) acc.push(option.name);
                option.options?.forEach(x => x.value && acc.push(x.value));
            } else if (option.value) {
                acc.push(option.value);
            }
            return acc;
        }, []);

        try {
            await command.run(client, interaction, args);
        } catch (e) {
            console.error(e);
        }
    }
}