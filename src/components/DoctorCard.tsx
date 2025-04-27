'use client';
import Link from 'next/link';

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  location: string;
}

export default function DoctorCard({
  id,
  name,
  specialty,
  location,
}: DoctorCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>{specialty}</p>
      <p>{location}</p>
      <Link href={`/doctors/${id}`}>
        <button className="mt-2 text-blue-600 underline">View Profile</button>
      </Link>
    </div>
  );
}
