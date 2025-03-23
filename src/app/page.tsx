'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Email, Phone } from '@mui/icons-material';

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  // State for search fields
  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  // Specialization list
  const specializations = [
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Orthopedic',
    'Neurologist',
  ];

  // top specialists data
  const topSpecialists = Array.from({ length: 12 }, (_, index) => ({
    name: `Dr. Specialist ${index + 1}`,
    specialty: specializations[index % specializations.length],
    image: `/images/doctor${(index % 5) + 1}.jpg`, // Replace with actual images
  }));

  const handleSearch = () => {
    console.log({ doctorName, specialization, date, location });
    // Implement search logic (API call)
  };

  return (
    <div>
      <main className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Doctor Appointment System
          </h1>
          <p className="text-gray-600 mt-4">
            Book your appointments with ease and convenience.
          </p>
          <button type="submit" className="btn btn-primary mt-4">
            Get Started
          </button>
        </div>

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Featured Advertisements
          </h2>
          <Carousel>
            <Carousel.Item>
              <Image
                src="/images/ad1.jpg"
                alt="Exclusive Health Packages"
                width={800}
                height={400}
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3 className="text-lg font-semibold text-gray-800">
                  Exclusive Health Packages
                </h3>
                <p>Get premium healthcare at affordable prices.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                src="/images/ad2.jpg"
                alt="Specialist Consultations"
                width={800}
                height={400}
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3 className="text-lg font-semibold  text-gray-800">
                  Specialist Consultations
                </h3>
                <p>Book your consultation with top doctors.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                src="/images/ad3.jpg"
                alt="24/7 Online Support"
                width={800}
                height={400}
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3 className="text-lg font-semibold  text-gray-800">
                  Specialist Consultations
                </h3>
                <p>Book your consultation with top doctors.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                src="/images/ad4.jpg"
                alt="24/7 Online Support"
                width={800}
                height={400}
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3 className="text-lg font-semibold  text-gray-800">
                  24/7 Online Support
                </h3>
                <p>Get medical assistance anytime, anywhere.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* Search Doctors Section */}
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Find a Doctor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Doctor Name Input */}
            <input
              type="text"
              placeholder="Doctor Name"
              className="form-control"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />

            {/* Specialization Dropdown */}
            <select
              className="form-select"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Select Specialization</option>
              {specializations.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>

            {/* Date Picker */}
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            {/* Location Input */}
            <input
              type="text"
              placeholder="Location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="text-center mt-4">
          <button className="btn btn-primary w-50" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Quick Accesses Section */}
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Order Medicines */}
            <div className="text-center p-4 border rounded-lg shadow-md bg-blue-50">
              <Image
                src="/images/order-medicine.png"
                alt="Order Medicines"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2">Order Medicines</h3>
              <p className="text-sm text-gray-600">
                Get medicines delivered to your doorstep.
              </p>
              <button className="btn btn-primary mt-3">Order Now</button>
            </div>

            {/* OPD Appointments */}
            <div className="text-center p-4 border rounded-lg shadow-md bg-green-50">
              <Image
                src="/images/opd.png"
                alt="OPD Appointments"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2">OPD Appointments</h3>
              <p className="text-sm text-gray-600">
                Book OPD appointments with top specialists.
              </p>
              <button className="btn btn-primary mt-3">Book Now</button>
            </div>

            {/* Medical Checkups */}
            <div className="text-center p-4 border rounded-lg shadow-md bg-yellow-50">
              <Image
                src="/images/medical-checkup.png"
                alt="Medical Checkups"
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2">Medical Checkups</h3>
              <p className="text-sm text-gray-600">
                Schedule full body checkups at the best hospitals.
              </p>
              <button className="btn btn-primary mt-3">Schedule Now</button>
            </div>
          </div>
        </div>

        {/* Top Specialists Section */}
        <div className="container mx-auto p-8 mt-10">
          {/* Light Pink Background with Padding */}
          <div className="bg-pink-100 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Top Specialists
            </h2>

            {/* Grid Layout with Better Spacing & Responsive Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {topSpecialists.map((doctor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 border border-white rounded-lg shadow-md bg-white"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center mt-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                See More
              </button>
            </div>
          </div>
        </div>

        {/* Channelling Centre Contact Details */}
        <div
          className="w-full max-w-2xl mx-auto shadow-lg rounded-lg p-6 mt-10 text-center text-white"
          style={{ backgroundColor: '#1e3a8a' }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Channelling Centre Contact Details
          </h2>

          <p className="flex justify-center items-center gap-2">
            <strong>Address:</strong> 123 Main Street, Colombo, Sri Lanka
          </p>

          <p className="flex justify-center items-center gap-2">
            <Phone className="text-yellow-400" />
            <strong>Phone:</strong> +94 112 345 678
          </p>

          <p className="flex justify-center items-center gap-2">
            <Email className="text-yellow-400" />
            <strong>Email:</strong> support@channellingcenter.com
          </p>

          <p className="flex justify-center items-center gap-2">
            <strong>Operating Hours:</strong> (8:00 AM - 11:00 PM)
          </p>
        </div>
      </main>
    </div>
  );
}
