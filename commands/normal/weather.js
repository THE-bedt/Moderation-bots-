const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
    name: "weather",
    aliases: ['weather'],
    usage: "!weather <location>",
    description: "weather command",
    run: async (client, message, args) => {
        const city = args[0]

     weather.find({search: args.join(" "), degreeType: "C"}, function(error, result){

      if (error) return message.channel.send(error)
      if (!city) return message.channel.send("You didn't enter the name of the place of which you want to get the weather.")

      if (result === undefined || result.length === 0) return message.channel.send("You didn't specify a valid location")

      let current = result[0].current
      let location = result[0].location

      const embed = new Discord.MessageEmbed()
      .setTitle(`Showing the Weather Info for ${current.observationpoint}`)
      .setDescription(current.skytext)
      .setThumbnail(current.imageUrl)
      .setColor(`RANDOM`)
      .setTimestamp()
      .addField("Temperature: ", current.temperature + "*C", true)
      .addField("Wind Speed: ", current.winddisplay, true)
      .addField("Humidity: ", `${current.humidity}%`, true)
      .addField("Timezone: ", `UTC${location.timezone}`, true)
      .setFooter("Weather Command")

      message.channel.send(embed)

     })
    }
}