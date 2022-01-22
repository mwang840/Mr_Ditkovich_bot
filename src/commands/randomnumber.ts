import { Message } from 'discord.js';
import { randomInt } from 'crypto';

export const RandomNumber = async (message: Message) => {

    const number = randomInt(1, 100);
    await message.reply(`Your number is : ${number}`);

};

export default RandomNumber;
