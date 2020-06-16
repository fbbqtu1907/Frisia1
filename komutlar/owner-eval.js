
//if ([ayarlar.token].includes(code)) return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
	if(message.author.id !== "419214688061227009") if(message.author.id !== "655420859204501523")  return
 
		try {
let codein = args.join(" ");
let code = eval(codein)
      
      if (codein.length < 1) return message.channel.send(`:x: Bir kod girmelisin.`)
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
  
   message.channel.send('Belirttiğin, '+`\`\`\`js\n${codein}\`\`\``+' Kodunu uyguladım.')   
  } catch(e) {
    let embed2 = new Discord.RichEmbed()
    .setColor('BLUE')
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
  
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};

