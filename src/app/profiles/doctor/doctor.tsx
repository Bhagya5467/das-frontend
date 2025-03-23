import React, { useState } from 'react';

const DoctorProfile = () => {
  const [availability, setAvailability] = useState('Available');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
      <p className="mb-2">
        <strong>Name:</strong> Dr. Smith
      </p>
      <p className="mb-2">
        <strong>Specialization:</strong> Cardiology
      </p>
      <p className="mb-2">
        <strong>Experience:</strong> 10 years
      </p>
      <p className="mb-2">
        <strong>Availability:</strong> {availability}
      </p>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={() =>
          setAvailability(
            availability === 'Available' ? 'Not Available' : 'Available'
          )
        }
      >
        Toggle Availability
      </button>
    </div>
  );
};

export default DoctorProfile;
