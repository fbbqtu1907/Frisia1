const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
const generator = require('generate-password');
exports.run = async(client, message, args) => { 
  
 let bug = args.slice(0).join(' '); 
  
 if(!bug) return message.reply('`en:` You must specify the bot error you want to report to our team. \n\n `tr:` Ekibimize bildirmek istediğiniz bot hatasını yazmalısınız.').then(s => s.delete(10000))
 
  if(bug.length > 600) {
   message.reply('`en:` The error message can contain up to 600 characters. \n\n `tr:` Hata mesajı max 600 karakter içerebilir.').then(s => s.delete(10000))
  message.delete()
    return
  }
  message.react('633993795066658832')
 let gold = await db.fetch(`gold_${message.author.id}`) 
 let şekil;
 if(gold) şekil = '**[:star:]** | Gold Member report (special class)' 
 else şekil = 'Normal user report.' 
          var password = generator.generate({
        length: 10,
        numbers: true,  
         }) 
  let embed = new Discord.RichEmbed()
  .setTitle('Thanks for your report!')
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription('As Jendisa team, we are constantly working for a better service. By showing us our mistakes, you make our job much easier... Thanks!')
  .addBlankField()
  .addField(':open_file_folder: | Report İnformation', '⪢ **Sending date:** \n '+moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')+' \n\n ⪢ **Report Class** \n '+şekil+' \n\n ⪢ **Report Code:** \n '+password+' \n\n ⪢ **Report Channel** \n '+message.channel.name+' \n\n ⪢ **Report Server:** \n '+message.guild.name)
  .addBlankField()
  .addField(':bell: | Report', bug)
  .setFooter(message.member.user.username, message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setURL('https://www.hoogle.com')
  .setColor('BLUE')
  message.member.send(embed)
  
    let report = new Discord.RichEmbed()
  .setTitle('New Report')
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription('As Jendisa team, we are constantly working for a better service. By showing us our mistakes, you make our job much easier... Thanks!')
  .addBlankField()
  .addField(':open_file_folder: | Report İnformation', '⪢ **Sending date:** \n '+moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')+' \n\n ⪢ **Report Class** \n '+şekil+' \n\n ⪢ **Report Code:** \n '+password+' \n\n ⪢ **Report Channel** \n '+message.channel.name+' \n\n ⪢ **Report Server:** \n '+message.guild.name+'\n\n **Reporter:**\n'+message.member.user.username)
  .addBlankField()
  .addField(':bell: | Report', bug)
  .setFooter(message.member.user.username, message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setURL('https://www.hoogle.com')
  .setColor('RED')
  client.channels.get('653274528453099570').send(report)
    };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'taslak', 
  usage: 'bug'
};

