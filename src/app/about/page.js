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
import data from '@/app/data.json';

const MainPage = () => {
  const about = data.about;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Fixed Navbar */}
      <header className="fixed px-20 top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Main content (with top padding to prevent content from hiding under navbar) */}
      <main className="pt-[80px] px-4">
        <ABSection1 data={about.ABSection1} />
        <ABSection2 data={about.ABSection2} />
        <ABSection3 data={about.ABSection3} />
        <ABSection4 data={about.ABSection4} />
        <ABSection5 data={about.ABSection5} />
        <ABSection6 data={about.ABSection6}/>
        <ABSection7 data={about.ABSection7}/>
        {/* Add more sections here */}
      </main>
    </div>
  );
};

export default MainPage;
