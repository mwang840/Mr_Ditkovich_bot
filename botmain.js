import tokens from './tokens';

const Discord = require('discord.js');
//Just created a discord bot
const client = new Discord.Client();

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
