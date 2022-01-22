import * as fs from 'fs';
import * as path from 'path';

const LogError = (message: string) => {
    const today: Date = new Date();
    fs.appendFileSync(path.resolve(__dirname, '../../../src', 'log', 'error', 'error_log.txt'), `[WHEN]:${today.toUTCString()} [ERROR]:[${message}]\n`);
};

export default LogError;
