export const capitalize = (text: string) => text.split(' ').map((word) => (
  word.length > 0
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : word
)).join(' ');
