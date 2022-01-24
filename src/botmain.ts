import { Client, type TextChannel } from 'discord.js';
import logError from './server/log_error';
import processCommand from './commands/processcommand';
import tokens from '../config/tokens';
import weekdaynumtostring from './lib/util/weekdaynumtostring';
import writeToAdminLog from './server/log_admin_activity';

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
        activities: [{ name: 'Waiting for rent',
            type: 'PLAYING',
            url: 'https://www.youtube.com/channel/UCHCqPwHUde2P-idHPUTMoqA' }],
        afk: false,
        status: 'online',
    },

});

const prefix = '+';

client.once(
    'ready',
    async () => {
        const generalChannel: TextChannel = client.channels.cache.get('934983047789543424') as TextChannel;
        const today: Date = new Date();
        // ConsoleLogging : console.log('date right now = ', today.getDay());
        await generalChannel.send(`Today is ${weekdaynumtostring(today.getDay())} and Mr Diktovitch is online and looking for rent!`);
    },
);

client.on(
    'messageCreate',
    async message => {
        if (!message.content.startsWith(prefix) && !message.author.bot) {
            await message.reply('You need to prefix your messages with + You owe me more rent now!')
                .then(() => {
                    writeToAdminLog(`Replied to message from ${message.author.username} because invalid prefix supplied in their request,`);
                })
                .catch((error: string) => {
                    logError(error);
                });
        } else {
            await processCommand(message);
        }

    },
);


client.login(tokens.bot2)
    .then((value: string) => {
        writeToAdminLog(`Logged in with token : ${value}`);
    })
    .catch((error: string) => {
        // Console Logging: console.log('An error occured!');
        logError(error);
    });
