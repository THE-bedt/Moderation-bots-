const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ['help'],
    usage: "!help",
    description: "help command",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Help list**`)
        .addField("!thelp-Fun", "Some Fun commands", true)
        .addField("!thelp-mod", "Some Moderation commands", true)
        .setColor(`RANDOM`)
        message.channel.send(embed)
    }
}