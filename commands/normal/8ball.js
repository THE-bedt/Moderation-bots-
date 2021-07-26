const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "8ball",
    aliases: ['8ball'],
    usage: "!8ball <random words>",
    description: "8ball command",
    run: async (client, message, args) => {
        const answers = [
            'Yes', 'No', 'Maybe', 'Never', 'For sure!', 'I don\'t know'
        ];
        const a = answers[Math.floor(Math.random() * answers.length)];

        return message.channel.send(
            new MessageEmbed()
            .setAuthor('8ball')
            .setDescription(
                `Question: ${args.join(' ')}\nAnswer: ${a}`
            )
            .setColor(`RANDOM`)
        )
    }
}