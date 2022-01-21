import { Message } from 'discord.js';
import { randomInt } from 'crypto';
import WriteToAdminLog from '../server/log_admin_activity';
import LogError from '../server/log_error';


const SlotMachine = async (message: Message) => {

    const result = `${randomInt(0, 10)}${randomInt(0, 10)}${randomInt(0, 10)}`;
    if (result === '777') {
        await message.reply(`JACKPOT! You spun ${result}`);
    } else {
        await message.reply(`You spun ${result}`)
            .then(() => {
                WriteToAdminLog('Executed slot machine');
            })
            .catch((error: string) => {
                LogError(error);
            });
    }

};

export default SlotMachine;
