
const Discord = require("discord.js")
const prefix = "w!"
let nazwabota = "WBOT"
require('dotenv').config();
const keepAlive = require('./server.js');
keepAlive();

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} jest online`)
});


bot.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    let args  = message.content.slice(prefix.length).trim().split (/ +/g);
    let command = args.shift().toLowerCase();
    
    if(command == "say"){
        if (!args[0]) return message.channel.send('Podaj treść wiadomości');
        const cnt = args.join(" ");
        message.delete();
        message.channel.send(`${cnt}`);
    }
    if(command == "ping"){
        message.delete();
        message.channel.send("Pong!");
    }
    if (command == "clear") {
        let ilosc = args[0];
        if (!ilosc) return message.channel.send('Podaj ilość wiadomości którą mam usunąć');
        if (isNaN(ilosc)) return message.channel.send('Podaj prawidłową liczbę');
        if(args[0] > 100) return message.reply('Nie możesz usunąć więcej niż 100 wiadomości!');
        if(args[0] < 1) return message.reply('Ale że 0 chcesz usunąć?');
        if(args[0] = 69) return message.reply('Czemu akurat tyle?');
        message.delete();
        message.channel.bulkDelete(ilosc);
        message.channel.send(`Gratuluję usunąłeś ${ilosc} wiadomosci!`).then(m => m.delete( {timeout: 10000} ))
    }
    if(command == "nitro"){
        const pawelek = '772146072357306380';
        message.delete();
        if (message.author.id == pawelek) {
        const user = message.author;
          let code = "";
          let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          for (let i = 0; i < 18; i++) {
              code = code + letters.charAt(Math.floor(Math.random() * letters.length));
          }
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Nitro gen`, user.displayAvatarURL())
        .setDescription(`\`https://discord.gift/${code}\``)
        .setFooter(`RÓSKIE PIROGI AŁÓ`)
        .setTimestamp();
        user.send(embed);
      } else return
  }
  if(command == "psc"){
    const pawelek = '772146072357306380';
    message.delete();
    if (message.author.id == pawelek) {
    const user = message.author;
      let code = "";
      let letters = "0123456789";
      for (let i = 0; i < 15; i++) {
          code = code + letters.charAt(Math.floor(Math.random() * letters.length));
      }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`PSC GEN`, user.displayAvatarURL())
    .setDescription(`\`0${code}:\``)
    .setFooter(`RÓSKIE PIROGI AŁÓ`)
    .setTimestamp();
    user.send(embed);
  } else return
}
});




    bot.login(process.env.DISCORD_TOKEN)
