import React from 'react';
import Calculator from '@/components/Calculator'; // Ensure the path is correct
import './globals.css'; // This should import your Tailwind CSS styles

export default function Home() {
  return (
    <div className="flex flex-col  bg-black grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Calculator />
    </div>
  );
}
