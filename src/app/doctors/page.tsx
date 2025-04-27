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

// Get unique specializations
const specialities = [
  ...new Set(doctors.map((doctor) => doctor.specialization)),
];

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter((doctor) =>
    [doctor.name, doctor.specialization, doctor.location].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Find Your Doctor
      </h1>

      {/* Search Input */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by name, specialty, or location..."
          className="border border-gray-300 p-2 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Doctor List */}
      <div className="mt-10">
        {specialities.map((specialty) => {
          const doctorsBySpecialty = filteredDoctors.filter(
            (doctor) => doctor.specialization === specialty
          );

          if (doctorsBySpecialty.length === 0) return null;

          return (
            <div key={specialty} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {specialty}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctorsBySpecialty.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="bg-white border rounded-lg shadow hover:shadow-md p-4 transition"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {doctor.specialization}
                    </p>
                    <p className="text-sm text-gray-500">{doctor.location}</p>
                    <Link
                      href={`/doctors/${doctor.id}`}
                      className="text-blue-500 underline mt-2 inline-block"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsPage;
