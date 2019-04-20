const Discord = require('discord.js');

exports.run = async function(client, message, args) {
    
  var x = args.slice(0).join(' ')
  
  if (!x) return message.reply("Temizlemek istediğin mesaj sayısını yazmalısın!")
  
  if (isNaN(x)) return message.reply("Temizlemek istediğin mesaj sayısını yazmalısın!")
  
  if (x < 1) return message.reply("**1** adetten az mesaj silemem!")
  if (x > 100) return message.reply("**100** adetten fazla mesaj silemem!")
  
  let fetched = await message.channel.fetchMessages({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))
  
  message.channel.send(`**${args[0]}** adet mesaj başarıyla silindi!`).then(msg => {
	msg.delete(3000)
})
  
	message.delete();
    
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['sil'],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	komut: 'temizle',
	aciklama: 'Belirli bir sayıdaki mesajları silmemizi sağlar.',
	kullanim: 'temizle <0/100>'
}
