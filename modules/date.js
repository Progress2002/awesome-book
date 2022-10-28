/* eslint-disable */
import { date } from './variables.js';
import { DateTime } from './luxonMini.js';

export const DISPLAY_TIME_DATE = () => {
  const currentDate = DateTime.now();
  date.innerHTML = currentDate.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};