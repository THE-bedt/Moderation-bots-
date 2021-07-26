const akinator = require("discord.js-akinator");

module.exports = {
    name: "aki",
    aliases: ['aki'],
    usage: "!aki",
    description: "aki command",
    run: async (client, message, args) => {
        akinator(message, client)
    }
}