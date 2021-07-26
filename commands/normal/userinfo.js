const Discord = require('discord.js')

module.exports = {
    name: "userinfo",
    aliases: ['user, info'],
    usage: "!userinfo <mention>",
    description: "iser info command",
    run: async (client, message, args) => {
        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        const userembed = new Discord.MessageEmbed()
        .setTitle(`User information for ${mentionedUser.username}`)
        .addField(`Username:`, `${mentionedUser.username}`)
        .addField(`Userid:`, `${mentionedUser.id}`)
        .addField(`Account created`, `${mentionedUser.createdAt}`)
        .addField(`joined the server at:`, `${mentionedUser.joinedAt}`)
        .addField(`User Status:`, `${mentionedUser.presence.status}`)
        .setColor(`RANDOM`)

        message.channel.send(userembed).catch(err => console.log(err));
    }
}