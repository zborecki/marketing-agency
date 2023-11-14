import dayjs from 'dayjs';

interface Parameters {
  time: string;
}

export const formattedTime = ({ time }: Parameters) => {
  const [hours, minutes] = time.split(':').map(Number);

  return dayjs().hour(hours).minute(minutes).format('HH:mm');
};
