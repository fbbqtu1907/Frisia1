 const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author

 
  
  if(args[0] === "server") {

 let lastSeen = Date.now() - message.guild.createdTimestamp;
    let seconds = lastSeen / 1000;
    let yıl =  parseInt(seconds / 31557600); 
     seconds = seconds % 31557600;
    let ay = parseInt(seconds / 2629800);  
    seconds = seconds % 2629800;
    let days = parseInt(seconds / 86400);
    seconds = seconds % 86400;
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);

    lastSeen = `${seconds} saniye`;
   if(yıl) {
     lastSeen = `**${yıl}** Years,**${ay}** Month,**${days}** Days,**${hours}** Hours,**${minutes}** Minutes,**${seconds}** Seconds!`;
   } else if(ay) {
    lastSeen = `**${ay}** Month ,**${days}** Days,**${hours}** Hours,**${minutes}** Minutes,**${seconds}** Seconds`;
  } else if (days) {
      lastSeen = `**${days}** Days,**${hours}** Hours,**${minutes}** Minutes, **${seconds}** Seconds`;
    }
    else if (hours) {
      lastSeen = `${hours} Hours,**${minutes}** Minutes,**${seconds}** Seconds`;
    }
    else if (minutes) {
      lastSeen = `${minutes} Minutes,**${seconds}** Seconds`;
    } 
    
    let a = message.guild.members.filter(a => a.hasPermission("ADMINISTRATOR"))
    
    
    let selfler;
 let hm = message.guild.members.filter(m => !m.user.bot).size + message.guild.members.filter(m => m.user.bot).size   
 if(hm !== message.guild.memberCount) selfler = message.guild.memberCount - hm
 if(!selfler) selfler = 'No Self Bots found on server!'   
let bilgi = new Discord.RichEmbed()
  .setTitle('Server Information')
  .setAuthor(user.username, user.avatarURL)
  .setDescription('Just type `!info <user>` to get the user information.')
  .addBlankField()
  .addField('Server Name:', '**'+message.guild.name+'**')
  .addField('Server İD:', '**'+message.guild.id+'**')
  .addField('Server Avatar:', message.guild.iconURL)
  .addField('Guild Region:', '**'+message.guild.region+'**')
  .addField('Main Channel:', '**'+message.guild.systemChannel+'**')
  .addField('Year of foundation:', lastSeen+ ' Later')
  .addBlankField()
  .addField('Users Size:', '**'+message.guild.members.filter(m => !m.user.bot).size+'**')
  .addField('Bots Size:', '**'+message.guild.members.filter(m => m.user.bot).size+'**')
  .addField('Self Bot Size:', selfler)
  .addField('+-----------------------', message.guild.memberCount)
  .addField('Owner:', '**'+message.guild.owner+'**')
  .addField('Owner İD:', '**'+message.guild.owner.id+'**')
  .addField('Owner Role:', '**'+message.guild.owner.highestRole.name+'**')
  .addField('Members with owner authority:', '**'+a.size+'**')
  .addBlankField()
  .addField('Voice Channels:', '**'+message.guild.channels.filter(i => i.type == "voice").size+'**')
  .addField('Text Channels:', '**'+message.guild.channels.filter(m => m.type == "text").size+'**')
  .addField('+-----------------------', message.guild.channels.size)
  .setFooter('Jendisa İnfo')
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setURL('https://google.com')
  .setColor('RANDOM')
message.channel.send(bilgi)   
    
    
    return
  }
  
  
  
  
  
  
  
  
  
  let perm;
  if(message.guild.members.get(user.id).hasPermission("MANAGE_NICKNAMES")) perm = 'Manage Nicknames'
  if(message.guild.members.get(user.id).hasPermission("MANAGE_MESSAGES")) perm = 'Manage Messages'
  if(message.guild.members.get(user.id).hasPermission("KICK_MEMBERS")) perm = 'Kick Members'
  if(message.guild.members.get(user.id).hasPermission("BAN_MEMBERS")) perm = 'Ban Members'
  if(message.guild.members.get(user.id).hasPermission("MANAGE_CHANNELS")) perm = 'Manage Channels'
  if(message.guild.members.get(user.id).hasPermission("MANAGE_GUILD")) perm = 'Manage Guild'
  if(message.guild.members.get(user.id).hasPermission("ADMINISTRATOR")) perm = 'Admınıstrator'
  if(user.id == message.guild.owner.id) perm = 'Server Owner'
  if(!perm) perm = 'I could not find significant moderation authority on this server.'
  
  
  if (user.presence.game) {var authorGame = user.presence.game.name;} else {authorGame = `This place looks empty!`;}
  
 let lastSeen = Date.now() - user.createdTimestamp;
    let seconds = lastSeen / 1000;
    let yıl =  parseInt(seconds / 31557600); 
     seconds = seconds % 31557600;
    let ay = parseInt(seconds / 2629800);  
    seconds = seconds % 2629800;
    let days = parseInt(seconds / 86400);
    seconds = seconds % 86400;
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);

    lastSeen = `${seconds} saniye`;
   if(yıl) {
     lastSeen = `**${yıl}** Years,**${ay}** Month,**${days}** Days,**${hours}** Hours,**${minutes}** Minutes,**${seconds}** Seconds!`;
   } else if(ay) {
    lastSeen = `**${ay}** Month ,**${days}** Days,**${hours}** Hours,**${minutes}** Minutes,**${seconds}** Seconds`;
  } else if (days) {
      lastSeen = `**${days}** Days,**${hours}** Hours,**${minutes}** Minutes, **${seconds}** Seconds`;
    }
    else if (hours) {
      lastSeen = `${hours} Hours,**${minutes}** Minutes,**${seconds}** Seconds`;
    }
    else if (minutes) {
      lastSeen = `${minutes} Minutes,**${seconds}** Seconds`;
    } 
  

    let nick;
    if (user.username !== user.displayName) nick = user.displayName
  let yrol = message.guild.members.get(user.id).highestRole.name
  let yrolp = message.guild.members.get(user.id).highestRole.position
  
let bilgi = new Discord.RichEmbed()
  .setTitle('User Information')
  .setAuthor(user.username, user.avatarURL)
  .setDescription('Just type `!info server` to get the server information.')
  .addBlankField()
  .addField('User:', '**'+user+'**')
  .addField('İD:', '**'+user.id+'**')
  .addField('User Avatar:', client.users.get(user.id).avatarURL)
  .addField('Year of foundation:', lastSeen+ ' Later')
  .addBlankField()
  .addField('Server Nickname:', '**'+message.guild.members.get(user.id).displayName+'**')
  .addField('Highest Role on Server:', '**'+yrol+'**')
  .addField('Highest Role Position:', '**'+yrolp+'**')
  .addField('Highest Permissions:', '**'+perm+'**')
  .addBlankField()
  .addField('Presence Status:', '**'+user.presence.status+'**')
  .addField('Status:', '**'+authorGame+'**')
  .addBlankField()
  .addField('Roles:', message.guild.members.get(user.id).roles.map(g => g.name).join(`, `), true)
  .setFooter('Jendisa İnfo')
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setURL('https://google.com')
  .setColor('RANDOM')
message.channel.send(bilgi)
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'taslak', 
  usage: 'info'
};
