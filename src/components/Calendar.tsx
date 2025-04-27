'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleSubmit = () => {
    if (selectedDate) {
      console.log(
        'Selected Date for Appointment:',
        format(selectedDate, 'yyyy-MM-dd')
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <input
        type="date"
        onChange={handleDateChange}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Availability
      </button>
    </div>
  );
};

export default Calendar;
