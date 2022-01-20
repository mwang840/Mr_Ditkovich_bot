const tokens = require('./tokens.js');
var fs = require('fs');
const Discord = require('discord.js');
//Just created a discord bot
const client = new Discord.Client({

    'presence': {
        'status': 'online',
        'afk': false,
        'activities': [{ 'name': 'Waiting for rent', 'type': 'PLAYING', 'url': 'https://www.youtube.com/channel/UCHCqPwHUde2P-idHPUTMoqA' }]
    },
    'intents': [
        'GUILDS', 'GUILD_BANS', 'GUILD_MEMBERS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING', 'GUILD_SCHEDULED_EVENTS'
    ]

});

const prefix = '+';

client.once('ready', ()=>{
    console.log('Mr Diktovitch is online and looking for rent!');
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();


    if(command === 'ping'){
        message.channel.send('You have received a pong!');
    }
});


client.login(tokens.bot);
