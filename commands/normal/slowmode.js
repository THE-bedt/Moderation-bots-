module.exports = {
    name: "slowmode",
    aliases: ['slowmode'],
    usage: "!slowmode",
    description: "slowmode command",
    run: async (client, message, args) => {
        const messageArray = message.content.split(" ");

        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(`Slowmode set to: ${args[0]}s`)
    }
}