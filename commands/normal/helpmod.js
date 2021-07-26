const Discord = require("discord.js");

module.exports = {
    name: "help-mod",
    aliases: ['help-mod'],
    usage: "!thelp-mod",
    description: "help-mod command",
    run: async (client, message, args) => {
        const helpmod = new Discord.MessageEmbed()
        .setTitle("Moderation commands")
        .setDescription("These commands can only be used by mods")
        .addField("ban", "Ban command")
        .addField("unban", "unban command")
        .addField("clear", "clear message command")
        .addField("info", "info commands")
        .addField("poll", "poll command")
        .addField("kick", "kick command")
        .addField("userinfo", "userinfo command")
        .addField("dm", "dm command")
        .addField("mute", "mute command")
        .setColor(`RANDOM`)

        message.channel.send(helpmod)
    }
}