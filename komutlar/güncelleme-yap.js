const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
exports.run = async(client, message, args) => { 
  
let güncelleme = await db.fetch(`güncelleme`)  
let süre = await db.fetch(`güncellemesüre`)    
let gyapıcı = await db.fetch(`güncellemeyapımcı`)

let egüncelleme = await db.fetch(`egüncelleme`)  
let esüre = await db.fetch(`egüncellemesüre`)    
let egyapıcı = await db.fetch(`egüncellemeyapımcı`)  
 
if(message.author.id !== "419214688061227009")
if(message.author.id !== "655420859204501523") return

let güncellemes = args.slice(0).join(' '); 
  
if(güncelleme) {
  
db.set(`egüncelleme`, güncelleme)  
db.set(`egüncellemesüre`, süre)
db.set(`egüncellemeyapımcı`, gyapıcı)  
  
}
  let s =  moment(Date.now()).format('DD/MM/YYYY | HH:mm:ss')
  
db.set(`güncelleme`, güncellemes)
db.set(`güncellemesüre`, s)  
db.set(`güncellemeyapımcı`, message.author.id)  
  

message.channel.send('**Güncelleme kayıtlara geçti.** :tada:')  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'güncelleme-yap',
  description: 'taslak', 
  usage: 'güncelleme-yap'
};
