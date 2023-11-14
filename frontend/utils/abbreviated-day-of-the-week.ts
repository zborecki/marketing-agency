import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

import { DAY_OF_THE_WEEK } from '#constants/date-and-time';
import { DayOfTheWeek } from '#types/date-and-time';

require('dayjs/locale/pl');

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});

dayjs.updateLocale('pl', {
  weekdaysShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.']
});

export const abbreviatedDayOfTheWeek = (
  name: DayOfTheWeek,
  locale: string
) => dayjs().locale(locale).day(DAY_OF_THE_WEEK[name]).format('ddd');
