import dayjs from 'dayjs';

export const formattedTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);

  return dayjs().hour(hours).minute(minutes).format('HH:mm');
};
