const Discord = require("discord.js");
const client = new Discord.Client({
    fetchAllMembers: true
});
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const chalk = require("chalk");
const fs = require("fs");
const Jimp = require("jimp");
const db = require("quick.db");
const Canvas = require("canvas");
const ms = require("parse-ms");
const moment = require("moment");
const DBL = require('dblapi.js');
require("./util/eventLoader")(client);

///////////
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
  //response.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rem-moderations.glitch.me/`);
}, 10000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);

    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`gkanal_${member.guild.id}`);
  let süre = await db.fetch(`gsüre_${member.guild.id}`);
  let ceza = await db.fetch(`gceza_${member.guild.id}`);
  let user = client.users.get(member.id);
  if (!kanal) return;
  if (member.bot) return;
  let lastSeen = Date.now() - user.createdTimestamp;
  let seconds = lastSeen / 1000;
  let yıl = parseInt(seconds / 31557600);
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
  if (yıl) {
    lastSeen = `**${yıl}** Years,**${ay}** Month,**${days}** Days,**${hours}** Hours,**${minutes}** Minutes,**${seconds}** Seconds!`;
  } else if (ay) {
    lastSeen = `**${ay}** Month ,**${days}** Days,**${hours}** Hours,**${minutes}** Minutes,**${seconds}** Seconds`;
  } else if (days) {
    lastSeen = `**${days}** Days,**${hours}** Hours,**${minutes}** Minutes, **${seconds}** Seconds`;
  } else if (hours) {
    lastSeen = `${hours} Hours,**${minutes}** Minutes,**${seconds}** Seconds`;
  } else if (minutes) {
    lastSeen = `${minutes} Minutes,**${seconds}** Seconds`;
  }

  let dil = await db.fetch(`guvenlikdil_${member.guild.id}`)
  
 if(dil) {
     let lastSeen = Date.now() - user.createdTimestamp;
  let seconds = lastSeen / 1000;
  let yıl = parseInt(seconds / 31557600);
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
  if (yıl) {
    lastSeen = `**${yıl}** Yıl,**${ay}** Ay,**${days}** Gün,**${hours}** Saat,**${minutes}** Dakika,**${seconds}** Saniye!`;
  } else if (ay) {
    lastSeen = `**${ay}** Ay ,**${days}** Gün,**${hours}** Saat,**${minutes}** Dakika,**${seconds}** Saniye`;
  } else if (days) {
    lastSeen = `**${days}** Gün,**${hours}** Saat,**${minutes}** Dakika, **${seconds}** Saniye`;
  } else if (hours) {
    lastSeen = `${hours} Saat,**${minutes}** Dakika,**${seconds}** Saniye`;
  } else if (minutes) {
    lastSeen = `${minutes} Dakika,**${seconds}** Saniye`;
  }
     let geldi = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.avatarURL)
    .setDescription("**" + member + "** Sunucuya Katıldı! Gerekli kontroller yapılıyor.")
    .addBlankField()
    .addField("⫸ Gerekli Zaman:", süre)
    .addField("⫸ Hesap Kuruluş Tarihi:", lastSeen + " Önce")
    .addField("Ceza:", "**" + ceza + "**")
    .setFooter("Rem Moderations", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor("BLUE");
  client.channels
    .get(kanal.id)
    .send(geldi)
    .then(s => {
      setTimeout(() => {
        let gerekli;
        if (süre === "1 year") gerekli = "31557600000";
        if (süre === "1 month") gerekli = "2629800000";
        if (süre === "1 week") gerekli = "604800017";
        if (süre === "1 day") gerekli = "86400000";
        if (süre === "1 hour") gerekli = "3600000";

        let user = client.users.get(member.id);
        const kurulus = new Date().getTime() - user.createdAt.getTime();
        const gün = moment(kurulus).format("D");

        if (kurulus < gerekli) {
          let geldi = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.avatarURL)
            .setDescription("Kontroller yapıldı,hesabın kuruluş tarihi istenenden az **" +ceza +"** Cezası uygulandı!"
            )
            .addBlankField()
            .addField("⫸ Gerekli Zaman:", süre)
            .addField("⫸ Hesap Kuruluş Tarihi:", lastSeen + " Önce")
            .addField("Ceza:", "**" + ceza + "**")
            .setFooter("Rem Moderations", client.user.avatarURL)
            .setTimestamp()
            .setThumbnail(user.avatarURL)
            .setColor("RED");
          s.edit(geldi).then(x => x.react("❌"));

          if (ceza === "ban")
            member.guild.ban(member, { reason: "Security scan denied." });
          if (ceza === "kick")
            member.guild.member(member).kick("Security scan denied.");
        }
        if (kurulus > gerekli) {
          let geldi = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.avatarURL)
            .setDescription(
              member + " Güvenlik Taramasından Başarıyla geçti!."
            )
            .addBlankField()
            .addField("⫸ Gerekli Zaman:", süre)
            .addField("⫸ Hesap Kuruluş Tarihi:", lastSeen + " Önce")
            .setFooter("Rem Moderations", client.user.avatarURL)
            .setTimestamp()
            .setThumbnail(user.avatarURL)
            .setColor("GREEN");
          s.edit(geldi).then(x => x.react("✅"));
        }
      }, 10000);
    });
 return
 } else {
  
  
  
  let geldi = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.avatarURL)
    .setDescription(
      "**" + member + "** joined the server! necessary controls are being made."
    )
    .addBlankField()
    .addField("⫸ Required Time:", süre)
    .addField("⫸ Account establishment date:", lastSeen + " Ago")
    .addField("Penalty:", "**" + ceza + "**")
    .setFooter("Rem Moderations Security")
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor("BLUE");
  client.channels
    .get(kanal.id)
    .send(geldi)
    .then(s => {
      setTimeout(() => {
        let gerekli;
        if (süre === "1 year") gerekli = "31557600000";
        if (süre === "1 month") gerekli = "2629800000";
        if (süre === "1 week") gerekli = "604800017";
        if (süre === "1 day") gerekli = "86400000";
        if (süre === "1 hour") gerekli = "3600000";

        let user = client.users.get(member.id);
        const kurulus = new Date().getTime() - user.createdAt.getTime();
        const gün = moment(kurulus).format("D");

        if (kurulus < gerekli) {
          let geldi = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.avatarURL)
            .setDescription(
              "Necessary checks were made, the member was prevented from joining the server and " +
                ceza +
                " penalty was applied!"
            )
            .addBlankField()
            .addField("⫸ Required Time:", süre)
            .addField("⫸ Account establishment date:", lastSeen + " Ago")
            .addField("Penalty:", "**" + ceza + "**")
            .setFooter("Rem Moderations Security")
            .setTimestamp()
            .setThumbnail(user.avatarURL)
            .setColor("RED");
          s.edit(geldi).then(x => x.react("❌"));

          if (ceza === "ban")
            member.guild.ban(member, { reason: "Security scan denied." });
          if (ceza === "kick")
            member.guild.member(member).kick("Security scan denied.");
        }
        if (kurulus > gerekli) {
          let geldi = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.avatarURL)
            .setDescription(
              member + " It has successfully passed a security scan."
            )
            .addBlankField()
            .addField("⫸ Required Time:", süre)
            .addField("⫸ Account establishment date:", lastSeen + " Ago")
            .setFooter("Rem Moderations Security")
            .setTimestamp()
            .setThumbnail(user.avatarURL)
            .setColor("GREEN");
          s.edit(geldi).then(x => x.react("✅"));
        }
      }, 10000);
    });
 }
 }); // güvenlik

client.on("guildUpdate", async (oldGuild, newGuild) => {
  let veri = await db.fetch(`sunucukoruma_${newGuild.id}`);

  if (!veri) return;

  const entry = await newGuild
    .fetchAuditLogs({ type: "GUİLD_UPDATE" })
    .then(audit => audit.entries.first());

  let user = oldGuild.members.get(entry.executor.id);

  if (user.hasPermission("ADMINISTRATOR")) return;

  if (oldGuild.iconURL !== newGuild.iconURL) {
    const entry = await newGuild
      .fetchAuditLogs({ type: "GUİLD_UPDATE" })
      .then(audit => audit.entries.first());

    let user = oldGuild.members.get(entry.executor.id);

    if (user.id === client.user.id) return;

    let s = client.guilds.get(oldGuild.id);

    s.setIcon(oldGuild.iconURL);

    let logs = await db.fetch(`korumalogları_${newGuild.id}`);

    let mlog = await db.fetch(`modlog_${newGuild.id}`);

    if (logs) {
      let engellendi = new Discord.RichEmbed()
        .setTitle(":x: | Blocked!")
        .setDescription(
          "**" + user + "** has been blocked from changing the server picture.!"
        )
        .setFooter("Rem Moderations Protection")
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setColor("RED");
      client.channels.get(mlog).send(engellendi);
    }
  }

  if (oldGuild.name !== newGuild.name) {
    let logs = await db.fetch(`korumalogları_${newGuild.id}`);

    let mlog = await db.fetch(`modlog_${newGuild.id}`);

    const entry = await newGuild
      .fetchAuditLogs({ type: "GUİLD_UPDATE" })
      .then(audit => audit.entries.first());

    let user = oldGuild.members.get(entry.executor.id);

    if (user.id === client.user.id) return;

    oldGuild.setName(oldGuild.name);
    if (logs) {
      let x = await `korumalogları_${newGuild.id}`;
      if (!x) return;
      let engellendi = new Discord.RichEmbed()
        .setTitle(":x: | Blocked!")
        .setDescription(
          "**" + user + "** has been blocked from changing the server name.!"
        )
        .setFooter("Rem Moderations Protection")
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setColor("RED");
      client.channels.get(mlog).send(engellendi);
    }
  }

  if (oldGuild.region !== newGuild.region) {
    let logs = await db.fetch(`korumalogları_${newGuild.id}`);

    let mlog = await db.fetch(`modlog_${newGuild.id}`);

    const entry = await newGuild
      .fetchAuditLogs({ type: "GUİLD_UPDATE" })
      .then(audit => audit.entries.first());

    let user = oldGuild.members.get(entry.executor.id);

    if (user.id === client.user.id) return;

    let s = client.guilds.get(oldGuild.id);
    s.setRegion(oldGuild.region);

    if (logs) {
      let x = await db.fetch(`korumalogları_${newGuild.id}`);
      if (!x) return;
      let engellendi = new Discord.RichEmbed()
        .setTitle(":x: | Blocked!")
        .setDescription(
          "**" + user + "** has been blocked from changing the server region.!"
        )
        .setFooter("Rem Moderations Protection")
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setColor("RED");
      client.channels.get(mlog).send(engellendi);
    }
  }
}); // sunucu koruma

client.on("roleDelete", async role => {
  //rol koruma (silme)

  let veri = await db.fetch(`rolkoruma_${role.guild.id}`);
   if (!veri) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  let logs = await db.fetch(`korumalogları_${role.guild.id}`);
  let mlog = await db.fetch(`modlog_${role.guild.id}`);
  let user = role.guild.members.get(entry.executor.id);
  let dokunulmaz = await db.fetch(`yakalanmıcak_${role.guild.id}`)
 if(dokunulmaz) {
  if(role.guild.members.get(user.id).roles.has(dokunulmaz)) return
 }
  if (user.hasPermission("ADMINISTRATOR")) return;
  if (user.id === client.user.id) return;

  role.guild.createRole({
    name: role.name,
    color: role.color,
    position: role.position,
    permissions: role.permissions
  });

  if (logs) {
    let embed = new Discord.RichEmbed()
      .setTitle("Blocked!")
      .setAuthor(
        client.users.get(user.id).username,
        client.users.get(user.id).avatarURL
      )
      .setDescription(
        "User " +
          client.users.get(user.id).username +
          " has attempted to delete a role. The role has been reinstalled."
      )
      .addBlankField()
      .addField("Role Name:", "`" + role.name + "`")
      .setTimestamp()
      .setThumbnail(client.users.get(user.id).avatarURL)
      .setColor("BLUE");
    client.channels.get(mlog).send(embed);
  }
}); // rol koruma (silme)

client.on("roleCreate", async role => {
  //rol koruma (ekleme)
  let veri = await db.fetch(`rolkoruma_${role.guild.id}`);
 if (!veri) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  let logs = await db.fetch(`korumalogları_${role.guild.id}`);
  let mlog = await db.fetch(`modlog_${role.guild.id}`);
  let user = role.guild.members.get(entry.executor.id);
  let dokunulmaz = await db.fetch(`yakalanmıcak_${role.guild.id}`)
 if(dokunulmaz) {
  if(role.guild.members.get(user.id).roles.has(dokunulmaz)) return
 }
  
  if (user.hasPermission("ADMINISTRATOR")) return;
  if (user.id === client.user.id) return;

  role.delete();

  if (logs) {
    let embed = new Discord.RichEmbed()
      .setTitle("Blocked!")
      .setAuthor(
        client.users.get(user.id).username,
        client.users.get(user.id).avatarURL
      )
      .setDescription(
        "User " +
          client.users.get(user.id).username +
          " has attempted to create a role. The role has been deleted.."
      )
      .addBlankField()
      .addField("Role Name:", "`" + role.name + "`")
      .setTimestamp()
      .setThumbnail(client.users.get(user.id).avatarURL)
      .setColor("BLUE");
    client.channels.get(mlog).send(embed);
  }
}); // rol koruma (açma)

client.on("channelCreate", async channel => {

  if(!channel.guild) return
  let veri = await db.fetch(`kanalkoruma_${channel.guild.id}`);
  if (!veri) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_CREATE" })
    .then(audit => audit.entries.first());
  let logs = await db.fetch(`korumalogları_${channel.guild.id}`);
  let mlog = await db.fetch(`modlog_${channel.guild.id}`);
  let user = channel.guild.members.get(entry.executor.id);
  let dokunulmaz = await db.fetch(`yakalanmıcak_${channel.guild.id}`)
 if(dokunulmaz) {
  if(channel.guild.members.get(user.id).roles.has(dokunulmaz)) return
 }
  if (user.hasPermission("ADMINISTRATOR")) return;
  if (user.id === client.user.id) return;

  channel.delete();

  if (logs) {
    let embed = new Discord.RichEmbed()
      .setTitle("Blocked!")
      .setAuthor(
        client.users.get(user.id).username,
        client.users.get(user.id).avatarURL
      )
      .setDescription(
        "User " +
          client.users.get(user.id).username +
          " has attempted to create a channel. The channel has been deleted."
      )
      .addBlankField()
      .addField("Channel Name:", "`" + channel.name + "`")
      .setTimestamp()
      .setThumbnail(client.users.get(user.id).avatarURL)
      .setColor("RED");
    client.channels.get(mlog).send(embed);
  }
}); // kanal koruma (açma)

client.on("channelDelete", async channel => {
  // kanal koruma (silme)
  let veri = await db.fetch(`kanalkoruma_${channel.guild.id}`);
  if (!veri) return;
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  let logs = await db.fetch(`korumalogları_${channel.guild.id}`);
  let mlog = await db.fetch(`modlog_${channel.guild.id}`);
  let user = channel.guild.members.get(entry.executor.id);
  let dokunulmaz = await db.fetch(`yakalanmıcak_${channel.guild.id}`)
 if(dokunulmaz) {
  if(channel.guild.members.get(user.id).roles.has(dokunulmaz)) return
 }
 
  
  if (user.hasPermission("ADMINISTRATOR")) return;
  if (user.id === client.user.id) return;

  channel.guild.createChannel(channel.name, {
    type: channel.type,
    parent: channel.parentID,
    userLimit: channel.userLimit,
    topic: channel.topic,
    position: channel.position
  });

  if (logs) {
    let embed = new Discord.RichEmbed()
      .setTitle("Blocked!")
      .setAuthor(
        client.users.get(user.id).username,
        client.users.get(user.id).avatarURL
      )
      .setDescription(
        "User " +
          client.users.get(user.id).username +
          " has attempted to delete a channel. The channel has been reinstalled."
      )
      .addBlankField()
      .addField("Channel Name:", "`" + channel.name + "`")
      .setTimestamp()
      .setThumbnail(client.users.get(user.id).avatarURL)
      .setColor("RED");
    client.channels.get(mlog).send(embed);
  }
}); // kanal koruma (silme)

client.on("message", async message => {
  if (!message.guild) return;
  let sistem = await db.fetch(`reklam_${message.guild.id}`);

  if (!sistem) return;
  let ceza = await db.fetch(`reklamcz_${message.guild.id}`);

  if (message.author.bot) return;

  if (message.member.hasPermission("MANAGE_MESSAGES")) return;

  let links = message.content.match(
    /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi
  );
  if (!links) return;
  if (message.deletable) message.delete();

  if (ceza === "warn") {
    let warn = new Discord.RichEmbed()
      .setTitle("<a:uyari:641250116165959698> | Stop link sharing!")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        "Links are blocked on the server given below. Link sharing is forbidden!"
      )
      .addBlankField()
      .addField(
        "**⫸** Server İnfo:",
        "Server Name: **" +
          message.guild.name +
          "** \n\n Server İD: **" +
          message.guild.id +
          "** \n\n Server Owner: **" +
          message.guild.owner +
          "**"
      )
      .addBlankField()
      .addField(":x: » Blocked Message: ", "`" + message.content + "`")
      .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      .setColor("BLUE");
    message.author.send(warn);
    return;
  }

  if (ceza === "kick") {
    let sınır = await db.fetch(
      `linkuyari_${message.author.id}_${message.guild.id}`
    );
    if (!sınır) {
      message
        .reply(
          "Link sharing on this server is blocked with kick. Stop link sharing. \n\n `3/1`"
        )
        .then(s => s.delete(5000));
      db.set(`linkuyari_${message.author.id}_${message.guild.id}`, 1);
    }
    if (sınır === 1) {
      message
        .reply(
          "Link sharing on this server is blocked with kick. Stop link sharing. \n\n `3/2`"
        )
        .then(s => s.delete(5000));
      db.add(`linkuyari_${message.author.id}_${message.guild.id}`, 1);
    }
    if (sınır === 2) {
      message
        .reply("did not stop despite warnings and kicked from server.!")
        .then(s => s.delete(15000));
      let warn = new Discord.RichEmbed()
        .setTitle("You Kicked!")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(
          "Since it is forbidden to share links on the server given below, the kick penalty specified is applied!"
        )
        .addBlankField()
        .addField(
          "**⫸** Server İnfo:",
          "Server Name: **" +
            message.guild.name +
            "** \n\n Server İD: **" +
            message.guild.id +
            "** \n\n Server Owner: **" +
            message.guild.owner +
            "**"
        )
        .addBlankField()
        .addField(":x: » Blocked Message: ", "`" + message.content + "`")
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED");
      await message.author.send(warn);
      db.delete(`linkuyari_${message.author.id}_${message.guild.id}`);
      message.guild.member(message.author).kick("Sharing Link");
    }
  }
  if (ceza === "ban") {
    let sınır = await db.fetch(
      `linkuyari_${message.author.id}_${message.guild.id}`
    );
    if (!sınır) {
      message
        .reply(
          "Link sharing on this server is blocked with ban. Stop link sharing. \n\n `3/1`"
        )
        .then(s => s.delete(5000));
      db.set(`linkuyari_${message.author.id}_${message.guild.id}`, 1);
    }
    if (sınır === 1) {
      message
        .reply(
          "Link sharing on this server is blocked with ban. Stop link sharing. \n\n `3/2`"
        )
        .then(s => s.delete(5000));
      db.add(`linkuyari_${message.author.id}_${message.guild.id}`, 1);
    }
    if (sınır === 2) {
      message
        .reply("did not stop despite warnings and banned from server.!")
        .then(s => s.delete(15000));
      let warn = new Discord.RichEmbed()
        .setTitle("You Banned!")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(
          "Since it is forbidden to share links on the server given below, the ban penalty specified is applied!"
        )
        .addBlankField()
        .addField(
          "**⫸** Server İnfo:",
          "Server Name: **" +
            message.guild.name +
            "** \n\n Server İD: **" +
            message.guild.id +
            "** \n\n Server Owner: **" +
            message.guild.owner +
            "**"
        )
        .addBlankField()
        .addField(":x: » Blocked Message: ", "`" + message.content + "`")
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        .setColor("RED");
      await message.author.send(warn);
      db.delete(`linkuyari_${message.author.id}_${message.guild.id}`);
      message.guild.ban(message.author, { reason: "Sharing Link" });
    }
  }
}); // link engel

client.on("message", async message => {
  if (!message.guild) return;
  let sistem = await db.fetch(`capsblock_${message.guild.id}`);

  if (!sistem) return;
  if (message.author.bot) return;
  if (message.member.hasPermission("MANAGE_MESSAGES")) return;
  if (message.channel.type === "dm") return;
  if (message.content.length < 4) return;

  let caps = message.content.toUpperCase();
  if (message.content == caps) {
    let kontrol =
      message.mentions.users.first() ||
      message.mentions.channels.first() ||
      message.mentions.roles.first();
    if (
      !kontrol &&
      !message.content.includes("@everyone") &&
      !message.content.includes("@here")
    ) {
      message.delete(50);
      message.channel
        .send("Caps blocked on this server!")
        .then(x => x.delete(3000));
    }
  }
}); // caps engel

client.on("guildBanAdd", async (guild, user) => {
  let veri = await db.fetch(`banblock_${guild.id}`);
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  let sunucu = client.guilds.get(guild.id);
  let banlıyan = sunucu.members.get(entry.executor.id);
  let logs = await db.fetch(`korumalogları_${guild.id}`);
  let mlog = await db.fetch(`modlog_${guild.id}`);

  if (banlıyan.bot) return;
  if (banlıyan.hasPermission("ADMINISTRATOR")) return;

  if (logs) {
    let embed = new Discord.RichEmbed()
      .setTitle("Ban Block!")
      .setAuthor(
        client.users.get(banlıyan.id).username,
        client.users.get(banlıyan.id).avatarURL
      )
      .setDescription(
        "**" +
          client.users.get(banlıyan.id).username +
          "** right-click ban protection caught. \n\n User (" +
          user.username +
          ") unbanned now."
      )
      .addBlankField()
      .addField("User:", "`" + user.username + "`")
      .addField("User İD:", user.id)
      .setTimestamp()
      .setThumbnail(client.users.get(user.id).avatarURL)
      .setColor("BLUE");
    client.channels.get(mlog).send(embed);

    guild.unban(user);
  }
}); // ban block

client.on("guildMemberAdd", async member => {
  // hg dm mesaj

  let mesaj = await db.fetch(`hgmsj_${member.guild.id}`);
  let tür = await db.fetch(`hgmsjbicim_${member.guild.id}`);
  let user = client.users.get(member.id);
  if (!mesaj) return;
  var mesajs = mesaj
    .replace("<user>", `${user.username}`)
    .replace("<server>", `${member.guild.name}`)
    .replace("<member>", `${member.guild.memberCount}`);

  if (member.bot) return;

  if (tür === "embed") {
    let embed = new Discord.RichEmbed()
      .setTitle("<a:kedicik:641676134081232896> Welcome!")
      .setAuthor(user.username, user.avatarURL)
      .setDescription(mesajs)
      .addBlankField()
      .setFooter("Rem Moderations", client.user.avatarURL)
      .setTimestamp()
      .setURL("https://google.com")
      .setColor("RANDOM");
    user.send(embed);
  }

  if (tür === "msj") {
    user.send(mesajs);
  }
}); // hg msj

//panel başlangıç
client.on("guildMemberAdd", async member => {
  let veri = db.fetch(`toplamuye_${member.guild.id}`);
  if (!veri) return;
  let dil = db.fetch(`paneldil_${member.guild.id}`);
  let bot = db.fetch(`bot_${member.guild.id}`);
  let topaktifkanal = db.fetch(`rekoraktif_${member.guild.id}`);
  let topaktif = db.fetch(`rekoraktifs_${member.guild.id}`);
  let aktif = db.fetch(`aktif_${member.guild.id}`);

  if (dil === "tr") {
    let topkanal = client.channels.get(veri);
    let botkanal = client.channels.get(bot);
    let aktifc = client.channels.get(aktif);
    topkanal.setName("Toplam Üye ▪ " + member.guild.memberCount);
    botkanal.setName(
      "Bot ▪ " + member.guild.members.filter(m => m.user.bot).size
    );
    aktifc.setName(
      "Aktif ▪ " +
        member.guild.members.filter(m => m.presence.status !== "offline").size
    );
    if (
      topaktif <
      member.guild.members.filter(m => m.presence.status !== "offline").size
    ) {
      let topaktifm = client.channels.get(topaktifkanal);
      topaktifm.setName(
        "Rekor Aktif ▪ " +
          member.guild.members.filter(m => m.presence.status !== "offline").size
      );
      db.set(
        `rekoraktifs_${member.guild.id}`,
        member.guild.members.filter(m => m.presence.status !== "offline").size
      );
    }
    if (dil === "en") {
      let topkanal = client.channels.get(veri);
      let botkanal = client.channels.get(bot);
      let aktifc = client.channels.get(aktif);
      topkanal.setName("Total Members ▪ " + member.guild.memberCount);
      botkanal.setName(
        "Bot ▪ " + member.guild.members.filter(m => m.user.bot).size
      );
      aktifc.setName(
        "Online ▪ " +
          member.guild.members.filter(m => m.presence.status !== "offline").size
      );
      if (
        topaktif <
        member.guild.members.filter(m => m.presence.status !== "offline").size
      ) {
        let topaktifm = client.channels.get(topaktifkanal);
        topaktifm.setName(
          "Record Online ▪ " +
            member.guild.members.filter(m => m.presence.status !== "offline")
              .size
        );
        db.set(
          `rekoraktifs_${member.guild.id}`,
          member.guild.members.filter(m => m.presence.status !== "offline").size
        );
      }
    }
  }
});

client.on("guildMemberRemove", async member => {
  let veri = db.fetch(`toplamuye_${member.guild.id}`);
  if (!veri) return;
  let dil = db.fetch(`paneldil_${member.guild.id}`);
  let bot = db.fetch(`bot_${member.guild.id}`);
  let topaktifkanal = db.fetch(`rekoraktif_${member.guild.id}`);
  let topaktif = db.fetch(`rekoraktifs_${member.guild.id}`);
  let aktif = db.fetch(`aktif_${member.guild.id}`);

  if (dil === "tr") {
    let topkanal = client.channels.get(veri);
    let botkanal = client.channels.get(bot);
    let aktifc = client.channels.get(aktif);
    topkanal.setName("Toplam Üye ▪ " + member.guild.memberCount);
    botkanal.setName(
      "Bot ▪ " + member.guild.members.filter(m => m.user.bot).size
    );
    aktifc.setName(
      "Aktif ▪ " +
        member.guild.members.filter(m => m.presence.status !== "offline").size
    );
    if (
      topaktif <
      member.guild.members.filter(m => m.presence.status !== "offline").size
    ) {
      let topaktifm = client.channels.get(topaktifkanal);
      topaktifm.setName(
        "Rekor Aktif ▪ " +
          member.guild.members.filter(m => m.presence.status !== "offline").size
      );
      db.set(
        `rekoraktifs_${member.guild.id}`,
        member.guild.members.filter(m => m.presence.status !== "offline").size
      );
    }
    if (dil === "en") {
      let topkanal = client.channels.get(veri);
      let botkanal = client.channels.get(bot);
      let aktifc = client.channels.get(aktif);
      topkanal.setName("Total Members ▪ " + member.guild.memberCount);
      botkanal.setName(
        "Bot ▪ " + member.guild.members.filter(m => m.user.bot).size
      );
      aktifc.setName(
        "Online ▪ " +
          member.guild.members.filter(m => m.presence.status !== "offline").size
      );
      if (
        topaktif <
        member.guild.members.filter(m => m.presence.status !== "offline").size
      ) {
        let topaktifm = client.channels.get(topaktifkanal);
        topaktifm.setName(
          "Record Online ▪ " +
            member.guild.members.filter(m => m.presence.status !== "offline")
              .size
        );
        db.set(
          `rekoraktifs_${member.guild.id}`,
          member.guild.members.filter(m => m.presence.status !== "offline").size
        );
      }
    }
  }
});

client.on("guildMembersChunk", function(members, guild) {
  let veri = db.fetch(`toplamuye_${guild.id}`);
  if (!veri) return;
  let dil = db.fetch(`paneldil_${guild.id}`);
  let bot = db.fetch(`bot_${guild.id}`);
  let topaktifkanal = db.fetch(`rekoraktif_${guild.id}`);
  let topaktif = db.fetch(`rekoraktifs_${guild.id}`);
  let aktif = db.fetch(`aktif_${guild.id}`);

  if (dil === "tr") {
    let topkanal = client.channels.get(veri);
    let botkanal = client.channels.get(bot);
    let aktifc = client.channels.get(aktif);
    topkanal.setName("Toplam Üye ▪ " + guild.memberCount);
    botkanal.setName("Bot ▪ " + guild.members.filter(m => m.user.bot).size);
    aktifc.setName(
      "Aktif ▪ " +
        guild.members.filter(m => m.presence.status !== "offline").size
    );
    if (
      topaktif < guild.members.filter(m => m.presence.status !== "offline").size
    ) {
      let topaktifm = client.channels.get(topaktifkanal);
      topaktifm.setName(
        "Rekor Aktif ▪ " +
          guild.members.filter(m => m.presence.status !== "offline").size
      );
      db.set(
        `rekoraktifs_${guild.id}`,
        guild.members.filter(m => m.presence.status !== "offline").size
      );
    }
    if (dil === "en") {
      let topkanal = client.channels.get(veri);
      let botkanal = client.channels.get(bot);
      let aktifc = client.channels.get(aktif);
      topkanal.setName("Total Members ▪ " + guild.memberCount);
      botkanal.setName("Bot ▪ " + guild.members.filter(m => m.user.bot).size);
      aktifc.setName(
        "Online ▪ " +
          guild.members.filter(m => m.presence.status !== "offline").size
      );
      if (
        topaktif <
        guild.members.filter(m => m.presence.status !== "offline").size
      ) {
        let topaktifm = client.channels.get(topaktifkanal);
        topaktifm.setName(
          "Record Online ▪ " +
            guild.members.filter(m => m.presence.status !== "offline").size
        );
        db.set(
          `rekoraktifs_${guild.id}`,
          guild.members.filter(m => m.presence.status !== "offline").size
        );
      }
    }
  }
});
//panel bitiş

client.on("guildMemberAdd", async member => {
  let gold = await db.fetch(`gold_${member.id}`);

  if (!gold) return;
    if (member.guild.id === "264445053596991498") return;
  let channel;
  channel = member.guild.systemChannel;
  if (!channel) channel = member.guild.channels.random();
  if (member.id === "419214688061227009") {
    client.channels
      .get(channel.id)
      .send(
        "<a:cekic:644054892670877716> My owner joined the server. <a:cekic:644054892670877716>"
      )
      .then(t => {
        t.react("641276271606759445");
        t.delete(70000);
      });
    return;
  }

  let user = client.users.get(member.id);
  let geldi = new Discord.RichEmbed()
    .setTitle("The golden member is here!")
    .setAuthor(user.username, user.avatarURL)
    .setDescription(
      "A **Gold Member** has appeared! There he is. \n\n <a:yildiz:633977788981968896> **" +
        user.username +
        "** Joined the server! <a:yildiz:633977788981968896>"
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setURL("https://www.google.com")
    .setColor("RED");
  client.channels
    .get(channel.id)
    .send(geldi)
    .then(m => {
      m.react("⭐");
      m.delete(25000);
    });

  if (member.id === "419214688061227009") {
    client.channels
      .get(channel.id)
      .send(
        "<a:cekic:644054892670877716> My owner joined the server. <a:cekic:644054892670877716>"
      )
      .then(t => {
        t.react("641276271606759445");
        t.delete(70000);
      });
  }
}); // gold,owner giriş

client.on("guildMemberAdd", async member => {
  let veri = await db.fetch(`ototag_${member.guild.id}`);
  if (!veri) return;

  let user = client.users.get(member.id);
  let user2 = member.guild.members.get(member.id);

  let x = veri.replace("<.>", user.username);
  user2.setNickname(x);
}); // oto tag



client.on("guildMemberAdd", async member => {
  let guild = member.guild;
  let user = client.users.get(member.id);
  if (guild.id !== "653268788791214090") return;

  let embed = new Discord.RichEmbed()
    .setTitle("<a:sad:643051556949721120> | Welcome!")
    .setAuthor(user.username, user.avatarURL)
    .setDescription(
      "You have join in to Rem Moderations official support server.We are pleased to see you.! <a:hh:639135059051413524>"
    )
    .setFooter("Have fun!", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(guild.iconURL)
    .setURL(ayarlar.sunucu)
    .setColor("#D608FF");
  user.send(embed);
}); // destek sunucu hg

client.on("guildMemberAdd", async member => {
  let veri = await db.fetch(`otorol_${member.guild.id}`);
  if (!veri) return;
  let user = client.users.get(member.id);
  
  
  if (user.bot) {
    let bot = await db.fetch(`otobot_${member.guild.id}`);
    member.guild.members.get(user.id).addRole(bot);
    return;
  }

  member.guild.members.get(user.id).addRole(veri);
}); // oto-rol

client.on("guildMemberAdd", async member => {

let zorluk = await db.fetch(`captchazorluk_${member.guild.id}`)  
if(!zorluk) return
let user = client.users.get(member.id)
if(user.bot) return
  
let rol = await db.fetch(`captcharol_${member.guild.id}`)  
let dil = await db.fetch(`captchadil_${member.guild.id}`)  

if(dil === "tr") {
  
let kolay = ["https://i.hizliresim.com/AOjqnz.png","https://i.hizliresim.com/OrjZVz.png","https://i.hizliresim.com/3Okav5.png","https://i.hizliresim.com/an7Dd7.png"]


let orta = ["https://i.hizliresim.com/5NjkLD.png","https://i.hizliresim.com/zGNVaO.png","https://i.hizliresim.com/RgjV1Z.png","https://i.hizliresim.com/YdolqA.png","https://i.hizliresim.com/p5OoXJ.png"]


let zor = ["https://i.hizliresim.com/dL9287.png","https://i.hizliresim.com/003klR.png","https://i.hizliresim.com/4pNk1p.png","https://i.hizliresim.com/JVj4qW.png","https://i.hizliresim.com/yGklN9.png","https://i.hizliresim.com/6DjkrE.png","https://i.hizliresim.com/WXjZgP.png","https://i.hizliresim.com/kM5gGy.png","https://i.hizliresim.com/NLj4lQ.png","https://i.hizliresim.com/86jbPA.png","https://i.hizliresim.com/gPQAOb.png","https://i.hizliresim.com/Z5lV9z.png","https://i.hizliresim.com/odJZOq.png","https://i.hizliresim.com/lQAyOp.png"]
  
 let s;
if(zorluk === "kolay") s = kolay  
if(zorluk === "orta") s = orta
if(zorluk === "zor") s = zor 
  
   let sonuc = (s[Math.floor(Math.random() * s.length)])
 let filtre = mes => mes.author.id === user.id;   
let beklenen;
if(sonuc === "https://i.hizliresim.com/AOjqnz.png") beklenen = "xnp"  
if(sonuc === "https://i.hizliresim.com/OrjZVz.png") beklenen = "nza"   
if(sonuc === "https://i.hizliresim.com/3Okav5.png") beklenen = "srd"   
if(sonuc === "https://i.hizliresim.com/an7Dd7.png") beklenen = "cuq"   

if(sonuc === "https://i.hizliresim.com/5NjkLD.png") beklenen = "ygse"   
if(sonuc === "https://i.hizliresim.com/zGNVaO.png") beklenen = "ncmg"   
if(sonuc === "https://i.hizliresim.com/RgjV1Z.png") beklenen = "aadf"   
if(sonuc === "https://i.hizliresim.com/YdolqA.png") beklenen = "wwwy"   
if(sonuc === "https://i.hizliresim.com/p5OoXJ.png") beklenen = "osoft"   

if(sonuc === "https://i.hizliresim.com/dL9287.png") beklenen = "xjxwh"   
if(sonuc === "https://i.hizliresim.com/003klR.png") beklenen = "ıxdbksoo"   
if(sonuc === "https://i.hizliresim.com/4pNk1p.png") beklenen = "wwuljyndın"   
if(sonuc === "https://i.hizliresim.com/JVj4qW.png") beklenen = "ccggvxssz"   
if(sonuc === "https://i.hizliresim.com/yGklN9.png") beklenen = "svgngn"   
if(sonuc === "https://i.hizliresim.com/6DjkrE.png") beklenen = "gmmcsax"   
if(sonuc === "https://i.hizliresim.com/WXjZgP.png") beklenen = "zngangzd"   
if(sonuc === "https://i.hizliresim.com/kM5gGy.png") beklenen = "saffoo"   
if(sonuc === "https://i.hizliresim.com/NLj4lQ.png") beklenen = "fasassf"   
if(sonuc === "https://i.hizliresim.com/86jbPA.png") beklenen = "qcmty"   
if(sonuc === "https://i.hizliresim.com/gPQAOb.png") beklenen = "rcttyq"   
if(sonuc === "https://i.hizliresim.com/Z5lV9z.png") beklenen = "yevunqy"   
if(sonuc === "https://i.hizliresim.com/odJZOq.png") beklenen = "nmnnbqwb"   
if(sonuc === "https://i.hizliresim.com/lQAyOp.png") beklenen = "trtwrcnrv"      
let embed = new Discord.RichEmbed()   
.setTitle(member.guild.name + ' Sunucusuna Hoşgeldin!')
.setDescription('Bu sunucu **Rem Moderations** captcha ile korunuyor.Sunucuya devam etmek için; \n\n **Aşağıda bulunan resimdeki karakterleri doğru bir şekilde yazmalısın.** \n\n :warning: `Büyük - Küçük` harf duyarlıdır.')
.setFooter('Rem Moderations', client.user.avatarURL)
.setImage(sonuc)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')      
user.send(embed).then(s => {
       
s.channel.awaitMessages(filtre, {
          max: 1,
        })
       
  .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
 return
 } else {
   
user.send('Kodu hatalı girdiniz `3/1`')   
s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
 return
   
 } else {
user.send('Kodu hatalı girdiniz `3/2`')   
s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
   if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
 return
   
 } else {
let embed = new Discord.RichEmbed()   
.setTitle('Bu Kötü!')
.setDescription('Maalesef 3 hakkınızı da yanlış girdiniz.Sunucuya giriş yapmanız engellendi.')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('RED')    
 user.send(embed)   
 }
})
 }
})
   
 
 }  
    
  })
  
  
})  
   
   
   }
  if(dil === "en") {
  
let kolay = ["https://i.hizliresim.com/AOjqnz.png","https://i.hizliresim.com/OrjZVz.png","https://i.hizliresim.com/3Okav5.png","https://i.hizliresim.com/an7Dd7.png"]


let orta = ["https://i.hizliresim.com/5NjkLD.png","https://i.hizliresim.com/zGNVaO.png","https://i.hizliresim.com/RgjV1Z.png","https://i.hizliresim.com/YdolqA.png","https://i.hizliresim.com/p5OoXJ.png"]


let zor = ["https://i.hizliresim.com/dL9287.png","https://i.hizliresim.com/003klR.png","https://i.hizliresim.com/4pNk1p.png","https://i.hizliresim.com/JVj4qW.png","https://i.hizliresim.com/yGklN9.png","https://i.hizliresim.com/6DjkrE.png","https://i.hizliresim.com/WXjZgP.png","https://i.hizliresim.com/kM5gGy.png","https://i.hizliresim.com/NLj4lQ.png","https://i.hizliresim.com/86jbPA.png","https://i.hizliresim.com/gPQAOb.png","https://i.hizliresim.com/Z5lV9z.png","https://i.hizliresim.com/odJZOq.png","https://i.hizliresim.com/lQAyOp.png"]
  
 let s;
if(zorluk === "kolay") s = kolay  
if(zorluk === "orta") s = orta
if(zorluk === "zor") s = zor 
  
   let sonuc = (s[Math.floor(Math.random() * s.length)])
 let filtre = mes => mes.author.id === user.id;   
let beklenen;
if(sonuc === "https://i.hizliresim.com/AOjqnz.png") beklenen = "xnp"  
if(sonuc === "https://i.hizliresim.com/OrjZVz.png") beklenen = "nza"   
if(sonuc === "https://i.hizliresim.com/3Okav5.png") beklenen = "srd"   
if(sonuc === "https://i.hizliresim.com/an7Dd7.png") beklenen = "cuq"   

if(sonuc === "https://i.hizliresim.com/5NjkLD.png") beklenen = "ygse"   
if(sonuc === "https://i.hizliresim.com/zGNVaO.png") beklenen = "ncmg"   
if(sonuc === "https://i.hizliresim.com/RgjV1Z.png") beklenen = "aadf"   
if(sonuc === "https://i.hizliresim.com/YdolqA.png") beklenen = "wwwy"   
if(sonuc === "https://i.hizliresim.com/p5OoXJ.png") beklenen = "osoft"   

if(sonuc === "https://i.hizliresim.com/dL9287.png") beklenen = "xjxwh"   
if(sonuc === "https://i.hizliresim.com/003klR.png") beklenen = "ıxdbksoo"   
if(sonuc === "https://i.hizliresim.com/4pNk1p.png") beklenen = "wwuljyndın"   
if(sonuc === "https://i.hizliresim.com/JVj4qW.png") beklenen = "ccggvxssz"   
if(sonuc === "https://i.hizliresim.com/yGklN9.png") beklenen = "svgngn"   
if(sonuc === "https://i.hizliresim.com/6DjkrE.png") beklenen = "gmmcsax"   
if(sonuc === "https://i.hizliresim.com/WXjZgP.png") beklenen = "zngangzd"   
if(sonuc === "https://i.hizliresim.com/kM5gGy.png") beklenen = "saffoo"   
if(sonuc === "https://i.hizliresim.com/NLj4lQ.png") beklenen = "fasassf"   
if(sonuc === "https://i.hizliresim.com/86jbPA.png") beklenen = "qcrnty"   
if(sonuc === "https://i.hizliresim.com/gPQAOb.png") beklenen = "rcttyq"   
if(sonuc === "https://i.hizliresim.com/Z5lV9z.png") beklenen = "yevunqy"   
if(sonuc === "https://i.hizliresim.com/odJZOq.png") beklenen = "nmnnbqwb"   
if(sonuc === "https://i.hizliresim.com/lQAyOp.png") beklenen = "trtwrcnrv"      
let embed = new Discord.RichEmbed()   
.setTitle(member.guild.name + ' Welcome The Server!')
.setDescription("Please complete the captcha below to gain access to the server.\n**NOTE:** This is Case Sensitive.")
.setFooter('Rem Moderations', client.user.avatarURL)
.setImage(sonuc)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')      
user.send(embed).then(s => {
       
s.channel.awaitMessages(filtre, {
          max: 1,
        })
       
  .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('You have been given access to **'+member.guild.name+'**')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
 return
 } else {
   
user.send('Invalid Response You have `2` attempts remaining.')   
s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('You have been given access to **'+member.guild.name+'**')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
 return
   
 } else {
user.send('Invalid Response You have `1` attempts remaining.')   
s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
   if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Thanks!')
.setDescription('You have been given access to **'+member.guild.name+'**')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
 return
   
 } else {
let embed = new Discord.RichEmbed()   
.setTitle('This is bad!')
.setDescription('Sorry, you have entered all 3 rights incorrectly.You have been denied login to the server.')
.setThumbnail(user.avatarURL)
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('RED')    
 user.send(embed)   
 }
})
 }
})
   
 
 }  
    
  })
  
  
})  
   
   
   }
}) //aşqm

client.on("message", async message => { 

  if(message.author.bot) return
  if (message.member.hasPermission("ADMINISTRATOR")) return;

  let içerik = message.content
  const resp = db.all().filter(data => data.ID.startsWith(`yasaklı_${message.guild.id}`)).sort((a, b) => b.data - a.data);

  let i = 1;
  let content = "  ";

resp.forEach(resp => { 
let user = client.users.find(m => m.id === resp.ID.split('_')[1])
if(user === null || undefined) user = "Unknown#0000";

  if(message.content.toLowerCase().includes(resp.data.name)) {
    message.delete()
   
    message.channel.send('You used a forbidden word! \n\n **Word: '+resp.data.name+'**').then(s => s.delete(10000))
  }
})
}) // yasaklı kelime


////////////////////////







client.on("message", msg => {
  if (!msg.content.startsWith(prefix)) {

    return;

}
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
