import { format, getDay, parse, startOfWeek } from 'date-fns';
import { dateFnsLocalizer } from 'react-big-calendar';
const locales = {
  es: 'esES',
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
