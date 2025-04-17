'use client';

import { useState, useEffect } from 'react';
import Header from '../main/components/header/Header';
import ABSection1 from './components/ABSection1';
import ABSection2 from './components/ABSection2';
import ABSection3 from './components/ABSection3';
import ABSection4 from './components/ABSection4';
import ABSection5 from './components/ABSection5';
import ABSection6 from './components/ABSection6';
import ABSection7 from './components/ABSection7';

const MainPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Fixed Navbar */}
      <header className="fixed px-20 top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Main content (with top padding to prevent content from hiding under navbar) */}
      <main className="pt-[80px] px-4">
        <ABSection1 />
        <ABSection2 />
        <ABSection3 />
        <ABSection4 />
        <ABSection5 />
        <ABSection6 />
        <ABSection7 />
        {/* Add more sections here */}
      </main>
    </div>
  );
};

export default MainPage;
