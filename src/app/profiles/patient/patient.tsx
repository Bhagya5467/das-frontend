import React from 'react';

const PatientProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Profile</h1>
      <p className="mb-2">
        <strong>Name:</strong> John Doe
      </p>
      <p className="mb-2">
        <strong>Email:</strong> patient@example.com
      </p>
      <p className="mb-2">
        <strong>Medical History:</strong> None
      </p>
      <p className="mb-2">
        <strong>Upcoming Appointments:</strong> None
      </p>
    </div>
  );
};

export default PatientProfile;
