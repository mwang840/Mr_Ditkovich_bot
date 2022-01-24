import type { Message } from 'discord.js';
import { randomInt } from 'crypto';


const randomNumber = async (message: Message): Promise<void> => {
    const START_NUM = 1;
    const END_NUM = 100;
    const number = randomInt(
        START_NUM,
        END_NUM,
    );
    await message.reply(`Your number is : ${number}`);

};

export default randomNumber;
