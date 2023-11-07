import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

import { DayOfTheWeek } from '#constants/date';
import { TDayOfTheWeek } from '#types/common';

// Languages
require('dayjs/locale/pl');

// Plugins
dayjs.extend(updateLocale);

// Configurations
dayjs.updateLocale('en', {
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});

dayjs.updateLocale('pl', {
  weekdaysShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.']
});

export const abbreviatedDayOfTheWeek = (
  name: TDayOfTheWeek,
  locale: string
) => dayjs().locale(locale).day(DayOfTheWeek[name]).format('ddd');
