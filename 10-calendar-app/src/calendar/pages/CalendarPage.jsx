import { addHours } from 'date-fns';
import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent, Navbar } from '../';
import { getMessagesES, localizer } from '../../helpers';

export const CalendarPage = () => {
  const events = [
    {
      title: 'My birthday',
      notes: 'It is my birthday',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Cristian',
      },
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return { style };
  };

  const [view, setView] = useState(localStorage.getItem('lastView') ?? 'month');

  const onDoubleClick = event => {
    console.log('onDoubleClick:', event);
  };

  const onSelect = event => {
    console.log('click: ', event);
  };

  const onViewChanged = event => {
    setView(event);
    localStorage.setItem('lastView', event);
  };

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
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        defaultView={view}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
    </>
  );
};
