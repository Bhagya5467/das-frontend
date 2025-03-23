import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="flex items-center justify-center min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default SignupLayout;
