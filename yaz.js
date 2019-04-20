const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
	kategori: 'bot'
}

exports.help = {
	komut: 'yaz',
	aciklama: 'Bottan bir mesaj yazmamızı sağlar.',
	kullanim: 'yaz <metin>'
}
