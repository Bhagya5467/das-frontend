// app/admin/layout.tsx
'use client';

import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
