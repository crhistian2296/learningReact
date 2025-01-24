import { addHours } from 'date-fns';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES, localizer } from '../../helpers';
import Navbar from '../components/Navbar';

export const CalendarPage = () => {
  const events = [
    {
      title: 'My birthday',
      notes: 'It is my birthday',
      start: new Date('2025-01-22'),
      end: addHours(new Date('2025-01-22'), 12),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Cristian',
      },
    },
  ];

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        culture='es-ES'
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
      />
    </>
  );
};
