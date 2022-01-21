import * as fs from 'fs';
import * as path from 'path';

export const WriteToAdminLog = (writing: string) => {

    fs.writeFileSync(path.resolve(__dirname), writing);

};
