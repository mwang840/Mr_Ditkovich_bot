import * as fs from 'fs';
import * as path from 'path';

const logError = (message: string): void => {
    const today: Date = new Date();
    fs.appendFileSync(
        path.resolve(
            __dirname,
            '../../../src',
            'log',
            'error',
            'error_log.txt',
        ),
        `[WHEN]:${today.toUTCString()} [ERROR]:[${message}]\n`,
    );
};

export default logError;
