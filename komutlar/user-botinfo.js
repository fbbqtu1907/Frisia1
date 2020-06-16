const Discord = require('discord.js');
const db = require('quick.db')
const fs = require("fs");
const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, args) => { 
  const duration = moment.duration(client.uptime).format(" D [Day], H [Hour], m [Minute], s [Second]");
 
  client.commands = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  
  let ping = client.ping.toFixed()
  
  let bilgi = new Discord.RichEmbed() 
   .setTitle('<a:hh:639135059051413524> Jendisa İnfo')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Safer With Jendisa!')
  .addBlankField()
  .addField('Owner İnfo', "My Owner **»** <@419214688061227009> \n Owner İD **»** 419214688061227009 \n My Owner's Instant Status **»** "+client.users.get('419214688061227009').presence.status)
  .addBlankField()
  .addField('Bot İnfo', '\nBot Ping **»** '+ping+' ms \n Message Ping **»** '+new Date().getTime() - message.createdTimestamp+' ms \n Discord.js Version **»** '+Discord.version + '\n Bot Start Time **»** '+duration+'\n Ram Usage **»** '+(process.memoryUsage().heapUsed / 2048 / 2048).toFixed(0) + ' mb \n Active Shards **»** 1 \n Commands **»**  '+files.length)
 .addBlankField()
 .addField('Statistics', 'Servers **»** '+client.guilds.size+'\n Users **»** '+client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
  .addBlankField()
  .addField(':heart: Thanks!', '**»** <@481121978426589184> Thank for your support. \n **»** <@'+message.author.id+'> Thanks for being the best user.')
  .setFooter('Jendisa (C.E)', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL('https://discord.gg/behdg6R')
  .setColor('#00FEF6') 
 message.channel.send(bilgi).then(s => s.delete(35000))
  }) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'bot',
  description: 'taslak', 
  usage: 'bot'
};
