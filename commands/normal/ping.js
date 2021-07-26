module.exports = {
    name: "ping",
    aliases: ['dff'],
    usage: "!ping",
    description: "WHAT THE COMMAND DOES",
    run: async (client, message, args) => {
    
     message.channel.send('pong')
    
    }
}