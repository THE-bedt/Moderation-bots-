const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client();
const xpfile = require('./xp.json')
const Nuggies = require('nuggies');
require('discord-buttons')(client);
client.on('clickMenu', menu => {
    Nuggies.dropclick(client, menu);
});
process.setMaxListeners(90)
const config = require('./config.json')

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();



const Categories = ['normal']; //Commands => Category => Command

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`Error In Command - Command Handler\n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`A File Does Not Ends With .js - Command Handler!`);
        let command = require(`./commands/${Category}/${file}`);
        console.log(`File ${file} was loaded`)

        if (!command.name || !command.aliases) throw new Error(`No Command Name & Command Aliases In A File - Command Handler!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => {

  let Prefix = config.prefix

  if (message.author.bot || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(Prefix)) return;

  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return console.log(`No Command Found!`);



  if (command) {
    command.run(client, message, args);
  };
});





const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.on('message', message => {
    if (message.content === '!r1') {
      const embed =  new discord.MessageEmbed().setTitle('1. No NSFW. ')
      .setDescription('Please keep this server clean and appropriate. As I said this server is for developers and people who need coding support. Anyone who misuses this will be banned.')
      .setColor('#5C428E')
  
      message.channel.send(embed)
    }
  });
  
client.on('message', message => {
    if (message.content === '!r2') {
      const embed = new discord.MessageEmbed()
      .setTitle('2. Try not to swear. ')
      .setDescription('Please limit swearing to a minimum. You are allowed to swear but not a people. e.x: Frick you!')
      .setColor('#5C428E')
  
      message.channel.send(embed)
    }
  });
  
client.on('message', message => {
    if (message.content === '!r3') {
      const embed = new discord.MessageEmbed()
      .setTitle('Staff words are final.')
      .setDescription('Do not argue with a staff member. Please contact us instead.')
      .setColor('#5C428E')
  
      message.channel.send(embed)
    }
});
  
client.on('message', message => {
    if (message.content === '!r4') {
      const embed = new discord.MessageEmbed()
      .setTitle('4. Don’t cause drama. ')
      .setDescription('Drama can harm our server, if you really need to argue then, DO IT IN DMS.')
      .setColor('#5C428E')
  
      message.channel.send(embed)
    }
});
  
client.on('message', message => {
    if (message.content === '!r5') {
      const embed = new discord.MessageEmbed()
      .setTitle('8. Follow the Discord Community Guidelines')
      .setURL('https://discordapp.com/guidelines')
      .setDescription('You Must follow discord guidlines or you will be banned')
      .setColor('#5C428E')
      message.channel.send(embed)
    }
});
  
client.on('message', message => {
    if (message.content === '!rmore') {
      const embed = new discord.MessageEmbed()
      .setTitle('Visit our rule\ channel')
      .setURL('https://discord.com/channels/848617811379224596/852241835144380437')
      .setDescription('For more rule\ ')
      .setColor('#5C428E')
  
      message.channel.send(embed)
    }
});





client.on("message" ,function(message) {
    if(message.author.bot) return;
    var addXP = Math.floor(Math.random() * 10); //when i type addXP it will randomly choose a number between 1-10   [  Math.floor(Math.random() * 10)  ]
// lvl 1 statics
    if(!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
           xp: 0,
           level: 1,
           reqxp: 100
        }
// catch errors
       fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){ 
        if(err) console.log(err)
       })
    }

    xpfile[message.author.id].xp += addXP

    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // it will subtrsct xp whenever u pass a lvl
        xpfile[message.author.id].reqxp *= 2 // XP you need to increase if level 1 is 100 xp so lvl 2 will 200 xp (multiplied by 2 [   .reqxp *= 2  ])
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // XP Round
        xpfile[message.author.id].level += 1 // it add 1 level when u level up

// this code will send (" you are now level [your lvl]!") then it will delete it after 10 seconds        
        message.reply("You Are Now Level **"+xpfile[message.author.id].level+"**!").then( 
            msg=>msg.delete({timeout: "10000"})
        )

    }
// catch errors
    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console/log(err)
    })

    //if someone typed in chat =level it will make a embed 
    if(message.content.startsWith("!level")){
        let user = message.mentions.users.first() || message.author

        let embed = new discord.MessageEmbed()
        .setTitle("Level Card")
        .setColor("GREEN")
        .addField("Level: ",xpfile[user.id].level)
        .addField("XP: ", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
        .addField("XP Required: ",xpfile[user.id].reqxp)
        message.channel.send(embed)
    }



        
})



// Login To Discord with your app's Token
client.login(config.token);