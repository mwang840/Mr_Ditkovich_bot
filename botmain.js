import tokens from './tokens';

const Discord = require('discord.js');
//Just created a discord bot
const client = new Discord.Client();


client.once('ready', ()=>{
    console.log('Mr Diktovitch is online and looking for rent!');
});



client.login(tokens.bot);