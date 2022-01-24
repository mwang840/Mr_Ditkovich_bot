import type { Message } from 'discord.js';
import randomNumber from './randomnumber';
import slotMachine from './slotmachine';

const processCommand = async (command: Message): Promise<void> => {
    const substringIndex = 1;
    if (command.content.substring(substringIndex).toLowerCase() === 'slots') {
        await slotMachine(command);
    } else if (command.content.substring(substringIndex) === 'randomnumber') {
        await randomNumber(command);
    }

};

export default processCommand;
