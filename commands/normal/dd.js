const Nuggies = require("nuggies");
const Discord = require("discord.js")

module.exports = {
    name: "dd",
    aliases: ['dropdown'],
    usage: "!dd",
    description: "dd command",
    run: async (client, message, args) => {
        const options = new Nuggies.dropdownroles().addrole({
            label: 'xd',
            role: '843937087178145862',
            emoji: '💢'
        }).addrole({
            label: 'mobile',
            role: '843941831800651816',
            emoji: '📱'
        });
    
        Nuggies.dropdownroles.create({
            message: message,
            role: options, /*dropdownroles constructor*/ 
            content: new Discord.MessageEmbed().setTitle('Click to get role').setDescription('lmao').setColor("BLUE"),
            channelID: message.channel.id
        });
    }
}