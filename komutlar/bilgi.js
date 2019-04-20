const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .addField("Yapımcılar", `${client.users.get("id").tag}`,true)
  .addField("Destek Sunucusu", "[Buraya Tıkla](https://discord.gg/davet)",true)
  .addField("Davet Bağlantısı", "[Buraya Tıkla](https://discordapp.com/oauth2/authorize?client_id=botclientid&scope=bot&permissions=2146958591)",true)
  .addField("Web Sitesi", "ibd.com",true)
  .addField("Oy ver", "yakında!",true)
  .addField("Bot Sürümü", "0.0.1",true)
  .setColor("RANDOM")
  message.channel.send(embed)
  
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['davet','destek','site','oyver','sürüm','yapımcı'],
	permLevel: 0,
	kategori: 'bot'
}

exports.help = {
	komut: 'bilgi',
	aciklama: 'Botun bilgilerini gösterir',
	kullanim: 'bilgi'
}
