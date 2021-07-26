const Discord = require('discord.js')

module.exports = {
    name: "poll",
    aliases: ['poll'],
    usage: "!poll",
    description: "poll",
    run: async (client, message, args) => {
        if(!args[0]) return message.reply("in order to suggest something you need to type something!") //Makes sure the user types something.
        const embed = new Discord.MessageEmbed() //Makes a new embed.
        .setTitle("Poll")
        .setDescription(args.join(" "))
        .setFooter(`Poll by ${message.author.tag}`) //Shows who posted the suggestion.
        .setColor("PURPLE")
        .setTimestamp()
        const suggestionChannel = message.guild.channels.cache.get('858434186100736050');
        suggestionChannel.send(embed).then(sentMessage => {
        sentMessage.react("⬆️").catch(console.error)
        sentMessage.react("⬇️").catch(console.error)
        })
    }
}