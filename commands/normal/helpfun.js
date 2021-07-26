const Discord = require("discord.js")

module.exports = {
    name: "help-fun",
    aliases: ['help-fun'],
    usage: "!t help-fun",
    description: "help-fun command",
    run: async (client, message, args) => {
        const funcmd = new Discord.MessageEmbed()
        .setTitle("Fun commands")
        .setDescription("Some list's of fun commands")
        .addField("8ball", "Bot will guess")
        .addField("aki", "akinator game")
        .addField("meme", "show some meme's")
        .addField("ping", "pin-pong command")
        .addField("snake", "snake game")
        .addField("Tranaslate", "Google translate")
        .addField("weather", "shows weather of any particular place E.X London")
        .addField("wikipedia", "wikipedia serach command")
        .setColor(`RANDOM`)

        message.channel.send(funcmd)
    
    }
}