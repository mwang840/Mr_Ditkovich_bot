import WriteToAdminLog from './server/log_admin_activity';
import LogError from './server/log_error';
import { tokens } from '../config/tokens';
import { TextChannel, Client } from 'discord.js';
import { processCommand } from './commands/processcommand';


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

client.once('ready', async () => {
    const generalChannel: TextChannel = client.channels.cache.get('934983047789543424') as TextChannel;
    const today: Date = new Date();
    const todayString = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
    await generalChannel.send(`Today is ${todayString} and Mr Diktovitch is online and looking for rent!`);
    console.log('Mr Diktovitch is online and demanding rent!');
});

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) && !message.author.bot) {
        await message.reply('You need to prefix your messages with + You owe me more rent now!')
            .then(() => {
                WriteToAdminLog(`Replied to message from ${message.author}}`);
            })
            .catch((error: string) => {
                LogError(error);
            });
    } else {
        await processCommand(message);
    }

});


client.login(tokens.bot2)
    .then((value: string) => {
        WriteToAdminLog(`Logged in with message : ${value}`);
    })
    .catch((error: string) => {
        console.log('An error occured!');
        LogError(error);
    });
