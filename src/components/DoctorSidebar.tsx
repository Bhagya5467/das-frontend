'use client';

import Link from 'next/link';

export default function DoctorSidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Doctor Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link
            href="/doctor/profile"
            className="text-blue-600 hover:underline"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/doctor/appointments"
            className="text-blue-600 hover:underline"
          >
            Appointments
          </Link>
        </li>
        <li>
          <Link
            href="/doctor/calendar"
            className="text-blue-600 hover:underline"
          >
            Calendar
          </Link>
        </li>
      </ul>
    </div>
  );
}
