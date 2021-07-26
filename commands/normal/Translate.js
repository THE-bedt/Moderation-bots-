const translate = require('@iamtraction/google-translate');
const Discord = require('discord.js')

module.exports = {
    name: "translate",
    aliases: ['translate'],
    usage: "!translate",
    description: "translate cmd",
    run: async (client, message, args) => {
        const txt = args.slice(1).join(" ")
        const lang = args[0]
        if(!txt) return message.channel.send("Please provide a text to translate")
        if(!lang) return message.channel.send("Please provide a ISO code of the language")
        translate(txt, { to: lang }).then(res => {
            const embed = new Discord.MessageEmbed()
            .setDescription(res.text)
            .setColor(`RANDOM`)
            message.channel.send(embed);
        }).catch(err => {
            message.channel.send("Please provide a valid ISO language code")
        });
    }
}