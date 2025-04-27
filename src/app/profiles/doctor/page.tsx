'use client';

import React from 'react';
import DoctorForm from '@/components/DoctorForm';
import Calendar from '@/components/Calendar';

const DoctorProfilePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
      <DoctorForm />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Manage Availability</h2>
        <Calendar />
      </div>
    </div>
  );
};

export default DoctorProfilePage;
