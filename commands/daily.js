const Discord = require('discord.js');
const moment = require('moment');

exports.run = async (client, message) => {
    const amount = 10;
    const score = client.getScore.get(message.author.id, message.guild.id);
    var dailyDate = moment(new Date(score.daily)).add(1, 'days');
    if (score.daily !== null && new Date(dailyDate).getTime() >= new Date(Date.now()).getTime() ) {
        return message.channel.send(`Ya has reclamado tus puntos diarios, espera hasta ${moment(new Date(score.daily)).add(1, 'days').calendar()}`);
    } else {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle('Puntos diarios obtenidos')
            .addField('Amount', amount)
            .setColor('RANDOM')
            .setTimestamp()
        score.daily = moment(Date.now()).toString();
        score.points += amount;
        client.setScore.run(score);
        message.channel.send(embed);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["diario","dia"],
    permLevel: "User"
};
  
exports.help = {
    name: "daily",
    category: "Economy",
    description: "Cobra tus puntos diarios, cobralos cada 24hrs.",
    usage: "daily"
};
  