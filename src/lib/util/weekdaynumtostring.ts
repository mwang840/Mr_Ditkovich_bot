/* eslint-disable @typescript-eslint/naming-convention -- disabled due to the warning about camelcasing*/
const weekdaymapper: {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
} = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
};

const weekdaynumtostring = (weekdaynumber: number): string => weekdaymapper[weekdaynumber] as string;
export default weekdaynumtostring;
