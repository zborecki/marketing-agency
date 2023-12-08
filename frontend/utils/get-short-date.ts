import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

require('dayjs/locale/pl');

dayjs.extend(updateLocale);

dayjs.updateLocale('pl', {
  monthsShort: [
    'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'
  ]
});

interface Props {
  date: string;
  locale: string;
}

export const getShortDate = ({ date, locale }: Props) => dayjs(date).locale(locale).format('DD MMM YYYY');
