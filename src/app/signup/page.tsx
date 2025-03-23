'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient', // Default role
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    router.push('/login'); // Redirect to login page after signup
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl flex">
        {/* Signup Form */}
        <div className="w-2/3 p-6">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Select Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>

        {/* Advertisement Blocks */}
        <div className="w-1/3 p-4 space-y-4">
          <div className="bg-blue-500 text-white text-center p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg">Special Discounts</p>
            <p>Get 20% off on medical checkups!</p>
          </div>
          <div className="bg-green-500 text-white text-center p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg">Pharmacy Offers</p>
            <p>Order medicines online & save money!</p>
          </div>
          <div className="bg-yellow-500 text-white text-center p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg">Premium Membership</p>
            <p>Exclusive benefits for members.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
