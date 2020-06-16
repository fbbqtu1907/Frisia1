const Discord = require('discord.js');
const ms = require("ms");
const db = require('quick.db')
const moment = require("moment")
exports.run = async(client, message, args) => { 
let başlangıç = await db.fetch(`bsorgu_${message.author.id}`)
let bitiş = db.fetch(`bitissorgu_${message.author.id}`)
let s = await db.fetch(`baslangic_${message.author.id}`)  
let x = await db.fetch(`goldsure_${message.author.id}`)  





if(!başlangıç) {

  message.react('❌')
  
  let yok = new Discord.RichEmbed()
  .setTitle(':x: No Membership Found! :(')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('You do not currently have a valid Gold Membership. Your current Gold membership may have expired.')
  .setFooter('Jendisa')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL('https://discord.gg/behdg6R')
  .setColor('RED')
 message.channel.send(yok).then(t => t.delete(15000))
  return
}


message.react('🌈')
message.reply('Check your **DM** box!').then(m => m.delete(4000))  





  let sorgu = new Discord.RichEmbed()
  .setTitle(':star: Gold your membership status')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('Your Gold Membership will be terminated automatically at the end of the period given below.You can benefit from your Gold Membership until it is terminated.')
  .addBlankField()
  .addField('🕐 Start Date', '**'+başlangıç+'**')
  .addField('📅 End Date','**'+bitiş+'**')
  .addBlankField()
  .addField(':x: Time Remaining', moment().add(x, 'days').calendar())
  .setFooter('Jendisa')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL('https://discord.gg/behdg6R')
  .setColor('RED')
  message.member.send(sorgu)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'gold-s',
  description: 'taslak', 
  usage: 'gold-s'
};
