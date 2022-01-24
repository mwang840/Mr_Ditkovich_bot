import type { Message } from 'discord.js';
import logError from '../server/log_error';
import { randomInt } from 'crypto';
import writeToAdminLog from '../server/log_admin_activity';

const slotMachine = async (message: Message): Promise<void> => {
    const START_NUM = 0;
    const END_NUM = 10;
    const result = `${randomInt(
        START_NUM,
        END_NUM,
    )}${randomInt(
        START_NUM,
        END_NUM,
    )}${randomInt(
        START_NUM,
        END_NUM,
    )}`;
    if (result === '777') {
        await message.reply(`JACKPOT! You spun ${result}`);
    } else {
        await message.reply(`You spun ${result}`)
            .then(() => {
                writeToAdminLog('Executed slot machine');
            })
            .catch((error: string) => {
                logError(error);
            });
    }

};

export default slotMachine;
