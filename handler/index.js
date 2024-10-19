const fs = require("node:fs");

// Carregar eventos
const loadEvents = async function (client) {
    const eventFolders = fs.readdirSync("./events");
    for (const folder of eventFolders) {
        const eventFiles = fs
        .readdirSync(`./events/${folder}`)
        .filter((file) => file.endsWith(".js"));
        
        for (const file of eventFiles) {
            const event = require(`../events/${folder}/${file}`);
            
            if (event.name) {
                console.log("EVENT: Sucess! --- " + file + " loaded");
            } else {
                console.log(`${new Date().toLocaleString()} EVENT: ERROR --- Error loading the event: ${file}`);
                continue;
            }
            
            if (event.once) {
                client.once(event.name, (...args) => {
                    event.execute(...args, client);
                });
            } else {
                client.on(event.name, (...args) => {
                    event.execute(...args, client);
                });
            }
        }
    }
}

//Carregar slashcommands
const loadSlashCommands = async function (client) {
    let slash = []

    const commandFolders = fs.readdirSync("./SlashCommands");
    for (const folder of commandFolders) {
        const commandFiles = fs
        .readdirSync(`./SlashCommands/${folder}`)
        .filter((file) => file.endsWith(".js"));
        
        for (const file of commandFiles) {
            const command = require(`../SlashCommands/${folder}/${file}`);
            
            if (command.name) {
                client.slash.set(command.name, command);
                slash.push(command)
                console.log("SLASH COMMAND: Sucess! --- " + file + " loaded");
            } else {
                console.log(`${new Date().toLocaleString()} SLASH COMMAND: ERROR --- Error loading the command: ${file}`);
                continue;
            }
        }
    }

    client.on("ready", async() => {
        await client.application.commands.set(slash)
    })
}

module.exports = {
    loadEvents,
    loadCommands,
    loadSlashCommands
}