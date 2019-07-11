//Dependecy for API
const Fortnite = require("../modules/fortnite-api");
// Note the **destructuring** here. instead of `args` we have :
// [action, key, ...value]
// This gives us the equivalent of either:
// const action = args[0]; const key = args[1]; const value = args.slice(2);
// OR the same as:
// const [action, key, ...value] = args;
exports.run = async (client, message, [action, key,...value]) => { // eslint-disable-line no-unused-vars
    //create instance for API with credentials
    let fortniteAPI = new Fortnite(
    [
        "bonnaduceg@gmail.com",
        "Loquesea31",
        "MzQ0NmNkNzI2OTRjNGE0NDg1ZDgxYjc3YWRiYjIxNDE6OTIwOWQ0YTVlMjVhNDU3ZmI5YjA3NDg5ZDMxM2I0MWE=",
        "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ="
    ]
   );
    //Login into EpicGames API
   fortniteAPI.login().then(() => {
    /*fortniteAPI
        .checkPlayer("Bonnaduce", "ps4")
        .then(stats => {
            console.log(stats);//Full stats for check existence of player with params checkPlayer(playerID, platform)
            message.reply(stats[1].name);
        })
        .catch(err => {
            console.log(err);
        });*/
    fortniteAPI
        .getStatsBR("Bonnaduce", "ps4", "alltime")
        .then(stats => {
            console.log(stats);//Full stats for player with info, params getStatsBR(playerID, platform, window)
        })
        .catch(err => {
            console.log(err);
        });/*
    fortniteAPI
        .getFortniteNews("es")
        .then(news => {
            console.log(news.br);//Json with news news. (fields: subgame, br, stw, battlepass, tournamentinformation)
        })
        .catch(err => {
            console.log(err);
        });
    fortniteAPI
        .getStore("es")
        .then(store => {
            console.log(store.data.storefronts[2].catalogEntries[0]);//Store isn't priority
        })
        .catch(err => {
            console.log(err);
        });
    fortniteAPI
        .getFortnitePVEInfo("es")
        .then(pveInfo => {
            console.log(pveInfo.missions[0].availableMissions[0]);//Nothing to do here, yet
        })
        .catch(err => {
            console.log(err);
        });*/

    });
 /*
  if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});
  
  // Edit an existing key value
  if (action === "view"||action === "ver") {
    // User must specify a key.
    if (!key) return message.reply("Escribe el ID de EPIC del jugador.");
    const joinedValue = value.join(" ");
    if (joinedValue.length < 1) return message.reply("Escribe el nombre de la plataforma (ps4,xbox,pc)");
    const search = await Scout.players.search(key, "epic", joinedValue, selectedGame.id, true, true);
    const playerId = search.results[0].player.playerId;
    const result = await Scout.players.get(selectedGame.id, playerId, "*");
    //const thing = await Scout.results.thing
    message.reply(joinedValue);
    //message.guild.channels.find(n => n.name ===client.config.defaultSettings.modLogChannel).send(`${result.segments[0]}`);//To send to different channel a msg
    console.log("---------------Search.results----------------");
    console.log(search.results);
    console.log(search.results[0].persona.handle); //Obtiene ID epic
    console.log("---------------result.segments[0]----------------");
    console.log(result.segments[0]);//Full segment (hides metadata of stats)
    console.log(`Segment 0 value 0: ${result.segments[0].metadata[0].displayValue}`);//type of game display value
    console.log(`Segment 1 value 0: ${result.segments[1].metadata[0].displayValue}`);
    console.log(`Segment 2 value 0: ${result.segments[2].metadata[0].displayValue}`);
    console.log(`Segment 3 value 0: ${result.segments[3].metadata[0].displayValue}`);
    //console.log(`Segment 4 value 0: ${result.segments[4].metadata[0].displayValue}`);
    //console.log(`Segment 5 value 0: ${result.segments[5].metadata[0].displayValue}`);
    console.log(`${result.segments[0].metadata[1].name}: ${new Date(Date.parse(result.segments[0].metadata[1].value))}`);//Last time played
    console.log(`${result.segments[0].stats[0].metadata.name}: ${result.segments[0].stats[0].displayValue}`);//
    console.log("---------------result.segments[1]----------------");
    console.log(result.segments[1].stats);//Parcial stats
    //console.log(Scout.results.thing);
    message.reply(`${result.stats[1].metadata.name}: ${result.stats[1].displayValue}`,);//Stats from General stats
  
  }else if(action === "stats"){
    if (!key) return message.reply("Escribe el ID de EPIC del jugador.");
    const joinedValue = value.join(" ");
    if (joinedValue.length < 1) return message.reply("Escribe el nombre de la plataforma (ps4,xbox,pc)");
    const search = await Scout.players.search(key, "epic", joinedValue, selectedGame.id, true, true);
    const playerId = search.results[0].player.playerId;
    const result = await Scout.players.get(selectedGame.id, playerId, "*");
    message.reply("Aqui imprimo mamadas");
    const exampleEmbed = new Discord.RichEmbed()
	    .setColor('#0099ff')
	    .setTitle('Stats Generales')
	    .setURL('https://www.facebook.com/EstucheDeBonnaduce/')
	    .setAuthor(search.results[0].persona.handle, message.author.displayAvatarURL, 'https://www.facebook.com/EstucheDeBonnaduce/')
	    .setDescription('Datos obtenidos desde ScoutSDK')
	    .setThumbnail('https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/53729313_381985839022229_315286857640312832_n.png?_nc_cat=109&_nc_ht=scontent.fntr4-1.fna&oh=982dad9d6c6495e6ed69ee06507208be&oe=5D706F05')
	    .addField('Regular field title', 'Some value here')
	    .addBlankField()
	    .addField('Inline field title', 'Some value here', true)
	    .addField('Inline field title', 'Some value here', true)
	    .addField('Inline field title', 'Some value here', true)
	    .setImage('https://i.imgur.com/wSTFkRM.png')
	    .setTimestamp()
	    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    message.channel.send(exampleEmbed);
  }*/
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["fortni","forna","fornais"],
  permLevel: "User"
};

exports.help = {
  name: "fortnite",
  category: "Games",
  description: "View stats in Fortnite.",
  usage: "fortnite <view(ver)/compare(compara)/shop(tienda)> <ID/VACIO><ID/VACIO>"
};
