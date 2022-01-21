import { Message } from 'discord.js';
import { randomInt } from 'crypto';


const SlotMachine = async (message: Message) => {

    const result = `${randomInt(0, 10)}${randomInt(0, 10)}${randomInt(0, 10)}`;
    if (result === '777') {
        await message.reply(`JACKPOT! You spun ${result}`);
    } else {
        await message.reply(`You spun ${result}`);
    }

};

export default SlotMachine;
