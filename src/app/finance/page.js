'use client';

import FinanceCalendar from '@/components/finance/FinanceCalender';
import { useState } from 'react';

export default function Page() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Grocery - $50', start: new Date(2025, 2, 5), end: new Date(2025, 2, 5) },
    { id: 2, title: 'Rent - $1000', start: new Date(2025, 2, 5), end: new Date(2025, 2, 5) },
  ]);

  const handleAddTransaction = () => {
    const title = prompt('Enter transaction title (e.g., Grocery - $50):');
    const dateInput = prompt('Enter transaction date (YYYY-MM-DD):');

    if (!title || !dateInput) return;

    const newEvent = {
      id: events.length + 1,
      title,
      start: new Date(dateInput),
      end: new Date(dateInput),
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div className="container pt-20 px-4">
      <h1>Finance Tracker</h1>

      <button onClick={handleAddTransaction} className="btn btn-primary">
        Add Transaction
      </button>

      <FinanceCalendar events={events} />
    </div>
  );
}
