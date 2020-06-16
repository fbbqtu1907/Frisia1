const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (bot, message, args) => { 
  
   const resp = db.all().filter(data => data.ID.startsWith(`yasaklı_${message.guild.id}`)).sort((a, b) => b.data - a.data);

    let i = 1;
  let content = "  ";

resp.forEach(resp => { 
let user = bot.users.find(m => m.id === resp.ID.split('_')[1])
if(user === null || undefined) user = "Unknown#0000";
content += `**\`${resp.data.name}\`**\n`;
});  
 
  let yasaklılar = new Discord.RichEmbed()
  .setTitle('⛔ **Black List Words** ⛔')
  .setDescription(`${content || `**No black list words Created Yet :(**`}`)
  .setColor('BLUE')
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(yasaklılar)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kelime-liste'], 
  permLevel: 0
};

exports.help = {
  name: 'word-list',
  description: 'taslak', 
  usage: 'word-list'
};
