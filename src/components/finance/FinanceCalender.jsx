import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function FinanceCalendar({ events }) {
  const handleSelectSlot = (start) => {
    console.log(start);
  };

  const handleSelectEvent = (event) => {
    console.log(event);
  };
  return (
    <div style={{ height: 600 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot} // Click on empty slot
        onSelectEvent={handleSelectEvent} // Click on existing event
      />
    </div>
  );
}
