import { Message } from 'discord.js';
import SlotMachine from './slotmachine';

export const processCommand = async (command: Message) => {

    if (command.content.substring(1).toLowerCase() === 'slots') {
        await SlotMachine(command);
    }

};
