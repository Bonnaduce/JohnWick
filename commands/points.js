const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
  let score = client.getScore.get(message.author.id, message.guild.id);
  const name = message.author.username.length > 20 ? message.author.username.substring(0, 17) + "..." : message.author.username;
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle('-==Score==-')
    .addField('Nivel', score.level)
    .addField('Puntos', score.points)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mypoint", "points", "profile", "card","score"],
  permLevel: "User"
};

exports.help = {
  name: "points",
  category: "Economy",
  description: "Revisa cuantos puntos tienes",
  usage: "points"
};