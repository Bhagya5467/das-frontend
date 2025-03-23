'use client';

import { useParams } from 'next/navigation';

const doctorsData = {
  '1': {
    name: 'Dr. John Doe',
    speciality: 'Cardiologist',
    qualifications: 'MBBS, MD (Cardiology)',
    slmc: 'SLMC12345',
    availableDays: 'Monday - Friday',
    time: '10:00 AM - 3:00 PM',
    location: 'Colombo General Hospital',
  },
  '2': {
    name: 'Dr. Jane Smith',
    speciality: 'Dermatologist',
    qualifications: 'MBBS, DDSc',
    slmc: 'SLMC67890',
    availableDays: 'Tuesday - Saturday',
    time: '9:00 AM - 2:00 PM',
    location: 'Kandy National Hospital',
  },
};

export default function DoctorProfile() {
  const params = useParams();
  const doctor = doctorsData[params.id as keyof typeof doctorsData];

  if (!doctor) {
    return <div className="text-center text-red-500">Doctor not found!</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">{doctor.name}</h2>
      <p className="text-lg text-gray-600">{doctor.speciality}</p>
      <p className="mt-2 text-gray-700">
        <strong>Qualifications:</strong> {doctor.qualifications}
      </p>
      <p className="mt-1 text-gray-700">
        <strong>SLMC Reg No:</strong> {doctor.slmc}
      </p>
      <p className="mt-1 text-gray-700">
        <strong>Available Days:</strong> {doctor.availableDays}
      </p>
      <p className="mt-1 text-gray-700">
        <strong>Time:</strong> {doctor.time}
      </p>
      <p className="mt-1 text-gray-700">
        <strong>Location:</strong> {doctor.location}
      </p>
    </div>
  );
}
