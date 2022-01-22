import { Message } from 'discord.js';
import SlotMachine from './slotmachine';
import RandomNumber from './randomnumber';

export const processCommand = async (command: Message) => {

    if (command.content.substring(1).toLowerCase() === 'slots') {
        await SlotMachine(command);
    } else if (command.content.substring(1) === 'randomnumber') {
        await RandomNumber(command);
    }

};
