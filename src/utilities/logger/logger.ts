import signale from 'signale';
import isdev from 'isdev';

export const logger = {
    ...signale,
    debug: isdev ? signale.debug : (): void => { },
};
