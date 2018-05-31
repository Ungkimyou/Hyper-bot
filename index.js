const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const botconfig = require('./botconfig.json');


client.on('ready', () => {const config = require("./config.json");
    console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} Servers ..`);
    client.user.setActivity(`${config.prefix}help for help▪■Dragon -_-■▪ `, { type: 'watching' })
   //client.user.setActivity(`TESTS`
  });
client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!ng hz');
  }


});
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "pin")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
   if(message.content.startsWith(config.prefix + "avatar") { 
     let msg = await message.channel.send("Waitng avatar..."); 
     let mentionedUser = message.mentions.users.first() || message.author; 
     let avatarEmbed = new Discord.RichEmbed() 
     .setImage(mentionedUser.displayAvatarURL) 
     .setColor(`RANDOM`) 
     .setTitle(`Avatar`) 
     .setDescription("[Avatar Link]("+mentionedUser.displayAvatarURL+")") 
     .setFooter(`Requested by ${message.author.tag}`); message.channel.send(avatarEmbed) 
     msg.delete();
 }
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing PLAYERUNKNOWN'S BATTLEGROUNDS");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Counter-Strike Global Offensive");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Counter-Strike Global Offensive") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Minecraft");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Grand Theft Auto V");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Grand Theft Auto V") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Fortnite");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Fortnite") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing DOTA 2");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "DOTA 2") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});


client.login(config.token);
