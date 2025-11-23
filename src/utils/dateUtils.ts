import {
  addWeeks,
  eachDayOfInterval,
  startOfDay,
  format,
  isToday,
  isSameDay,
  getDate,
  lastDayOfMonth,
} from 'date-fns';
import { enUS } from 'date-fns/locale';

export const generateDateRange = (): Date[] => {
  const today = startOfDay(new Date());
  const endDate = addWeeks(today, 6);

  return eachDayOfInterval({
    start: today,
    end: endDate,
  });
};

export const formatDate = (date: Date): string => {
  return format(date, 'd', { locale: enUS });
};

export const formatDayOfWeek = (date: Date): string => {
  return format(date, 'EEE', { locale: enUS });
};

export const formatMonthShort = (date: Date): string => {
  return format(date, 'MMM', { locale: enUS });
};

export const checkIsToday = (date: Date): boolean => {
  return isToday(date);
};

export const checkIsSameDay = (date1: Date, date2: Date): boolean => {
  return isSameDay(date1, date2);
};

export const isFirstDayOfMonth = (date: Date): boolean => {
  return getDate(date) === 1;
};

export const isLastDayOfMonth = (date: Date): boolean => {
  const lastDay = lastDayOfMonth(date);
  return isSameDay(date, lastDay);
};

export const shouldShowMonth = (date: Date): boolean => {
  return isFirstDayOfMonth(date) || isLastDayOfMonth(date);
};
