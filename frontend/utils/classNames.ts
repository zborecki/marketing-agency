import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNames = (...args: ClassValue[]) => twMerge(clsx(args));
