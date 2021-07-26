const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  name: "info",
  aliases: [],
  usage: "info",
  description: "Shows info",
  run: async (client, message, args) => {
  
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Server info "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Users',
          value: memberCount,
        },
        {
          name: 'Owner of this server',
          value: owner.user.tag,
        },
        {
          name: 'Afk Time',
          value: afkTimeout / 60,
        },
      )

    message.channel.send(embed)
  
  
  }
}