'use client';

import React from 'react';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <style jsx global>{`
        body {
          background-color: #0d6efd;
          position: relative;
        }
        .watermark {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/watermark.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.2;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
