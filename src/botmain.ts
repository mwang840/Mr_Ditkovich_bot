import WriteToAdminLog from './server/log_admin_activity';
import LogError from './server/log_error';
import { tokens } from '../config/tokens';
import { Client } from 'discord.js';


const client = new Client({

    intents: [
        'GUILDS',
        'GUILD_BANS',
        'GUILD_MEMBERS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_WEBHOOKS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING',
        'GUILD_SCHEDULED_EVENTS',
    ],
    presence: {
        activities: [{ name: 'Waiting for rent', type: 'PLAYING', url: 'https://www.youtube.com/channel/UCHCqPwHUde2P-idHPUTMoqA' }],
        afk: false,
        status: 'online',
    },

});

const prefix = '+';

client.once('ready', () => {
    console.log('Mr Diktovitch is online and looking for rent!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();


    if (command === 'ping') {
        await message.channel.send('You have received a pong!');
    }
});


client.login(tokens.bot)
    .then((value: string) => {
        const today: Date = new Date();
        WriteToAdminLog(`Logged in at ${today.toISOString()} with message : ${value}`);
    })
    .catch((error: string) => {
        console.log('An error occured!');
        LogError(error);
    });
