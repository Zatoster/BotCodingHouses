require("dotenv").config();
const   Discord  = require('discord.js')
const   bot = new Discord.Client()

//Toutes les actions à faire quand le bot se connecte
bot.on("ready", function () {
    console.log("Le bot est connecté");
})

bot.on('message', message => {
    if (message.content.includes('enculé')) {
        message.channel.send('*Oui ?*');
    }
})

// Utiliser un fichier .env à passer en gitignore pour garder le token du bot privé
bot.login(process.env.BOT_ID);