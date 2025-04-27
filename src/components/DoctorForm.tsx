'use client';

import React, { useState } from 'react';

const DoctorForm = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    qualifications: '',
    slmcRegNo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to backend API
    console.log('Doctor Details:', doctor);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-xl">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="specialty"
        placeholder="Specialty"
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="qualifications"
        placeholder="Qualifications"
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="slmcRegNo"
        placeholder="SLMC Registration Number"
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default DoctorForm;
