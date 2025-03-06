import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function FinanceCalendar({ events }) {
  const handleViewChange = (newView) => {
    console.log(newView);
  };

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
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onView={handleViewChange}
      />
    </div>
  );
}
