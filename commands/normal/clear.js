const Discord = require('discord.js');

module.exports = {
    name: "clear",
    aliases: ['purge'],
    usage: "!clear <amount of messages>",
    description: "clear command",
    run: async (client, message, args) => {
        try {

        const amount = Number(args[0], 10)
        
        const messages = await message.channel.messages.fetch({
            limit: amount + 1
        })
        
        message.channel.bulkDelete(messages)
        
        message.channel.send(`${amount} messages were deleted from this channel.`).then(
            msg=>msg.delete({timeout: "10000"})
        )
         
     }
        
        catch(e) { 
            console.log(e)
            message.channel.send("Something went wrong.. please try again.")
        }
        
    }
}