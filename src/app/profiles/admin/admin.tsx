import React from 'react';

const AdminProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-2">
        <strong>Name:</strong> Admin User
      </p>
      <p className="mb-2">
        <strong>Email:</strong> admin@example.com
      </p>
      <p className="mb-2">
        <strong>Manage Users:</strong> Yes
      </p>
      <p className="mb-2">
        <strong>Manage Appointments:</strong> Yes
      </p>

      <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        View System Logs
      </button>
    </div>
  );
};

export default AdminProfile;
