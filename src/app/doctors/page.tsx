'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    location: 'New York',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    location: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Dr. Emily Brown',
    specialization: 'Pediatrician',
    location: 'Chicago',
  },
  {
    id: 4,
    name: 'Dr. Michael Johnson',
    specialization: 'Orthopedic',
    location: 'San Francisco',
  },
];

const specialities = [
  ...new Set(doctors.map((doctor) => doctor.specialization)),
];

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Find Your Doctors
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search by name, specialty, or location..."
          className="border border-gray-300 p-2 rounded-lg w-96"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Doctors List */}
      <div className="mt-8">
        {specialities.map((specialty) => (
          <div key={specialty} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">{specialty}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {filteredDoctors
                .filter((doctor) => doctor.specialization === specialty)
                .map((doctor) => (
                  <div
                    key={doctor.id}
                    className="border p-4 rounded-lg shadow-lg bg-white"
                  >
                    <h3 className="text-lg font-bold">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialization}</p>
                    <p className="text-gray-500">{doctor.location}</p>
                    <Link
                      href={`/doctors/${doctor.id}`}
                      className="text-blue-500 underline mt-2 block"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
