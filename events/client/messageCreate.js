const { ChannelType } = require("discord.js");

module.exports = {
    name: 'messageCreate',

    /**
     * @param {Message} message 
     * @param {Client} client 
     */
    async execute(message, client) {
        try {
            if (!database || message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(process.env.prefix)) {
                return;
            }

            const [cmd, ...args] = message.content.slice(process.env.prefix.length).trim().split(/\s+/);
            const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

            if (!command || message.channel.type === ChannelType.DM) {
                return;
            }

            await command.run(client, message, args);
        } catch (error) {
            console.error(error);
        }
    }
}