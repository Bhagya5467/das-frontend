// app/patient/layout.tsx
'use client';

import React from 'react';
import PatientSidebar from '@/components/PatientSidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <PatientSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
