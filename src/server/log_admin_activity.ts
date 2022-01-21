import * as fs from 'fs';
import * as path from 'path';

const WriteToAdminLog = (writing: string) => {

    fs.appendFileSync(path.resolve(__dirname, '../../../src', 'log', 'admin', 'admin_log.txt'), `---> ${writing}\n`);

};

export default WriteToAdminLog;
