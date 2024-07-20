import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import duration from 'dayjs/plugin/duration';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
    meridiem: (hour, minute, isLowercase) => {
        if (hour > 11) {
            return isLowercase ? 'p.m.' : 'P.M.';
        }
        return isLowercase ? 'a.m.' : 'A.M.';
    },
});

export default dayjs;
