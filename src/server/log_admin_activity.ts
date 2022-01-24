import * as fs from 'fs';
import * as path from 'path';

const writeToAdminLog = (writing: string): void => {
    const today: Date = new Date();
    fs.appendFileSync(
        path.resolve(
            __dirname,
            '../../../src',
            'log',
            'admin',
            'admin_log.txt',
        ),
        `---> ${writing} at ${today.toUTCString()}\n`,
    );
};

export default writeToAdminLog;
