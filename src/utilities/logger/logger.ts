import signale from 'signale';
import isdev from 'isdev';

export default {
    ...signale,
    debug: isdev ? signale.debug : (): void => { },
};
