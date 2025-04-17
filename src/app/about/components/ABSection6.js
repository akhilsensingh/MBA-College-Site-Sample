'use client';

import { useState } from 'react';
import Image from 'next/image';

const leadersData = {
  governors: [
    {
      name: 'Manoj Kohli',
      title: 'Chairman',
      position: 'Former CEO & MD, Bharti Airtel',
      image: '/governors/manoj.png',
    },
    {
      name: 'Pankaj Bansal',
      title: 'Board Member',
      position: 'Co-Founder & Group CEO, PeopleStrong',
      image: '/governors/pankaj.png',
    },
    // ...add more
  ],
  executives: [
    {
      name: 'Pratham Mittal',
      title: 'Founder',
      position: 'BA/BS, University of Pennsylvania\nCoFounder, Outgrow',
      image: '/executives/pratham.png',
    },
    {
      name: 'Mahak Garg',
      title: 'Director, PGP TBM',
      position: 'MBA, Stanford GSB\nEx-Founder, Udayy | Forbes 30U30',
      image: '/executives/mahak.png',
    },
    // ...add more
  ],
  residents: [
    {
      name: 'Dr. Nandini Seth',
      title: 'Ph.D, IIM Bangalore',
      position: 'Quantitative Techniques',
      image: '/residents/nandini.png',
    },
    {
      name: 'Dr. Garima Chaklader',
      title: 'Ph.D, IIM Bangalore',
      position: 'Managerial Economics, Econometrics',
      image: '/residents/garima.png',
    },
    // ...add more
  ],
};

const tabList = [
  { key: 'governors', label: 'Board Of Governors' },
  { key: 'executives', label: 'Executive Leaders' },
  { key: 'residents', label: 'Masters In Residence' },
];

const ABSection6 = () => {
  const [activeTab, setActiveTab] = useState('governors');

  return (
    <div className="px-6 py-10">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        {tabList.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === tab.key ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {leadersData[activeTab].map((person, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md text-center">
            <Image
              src={person.image}
              alt={person.name}
              width={300}
              height={250}
              className="rounded-xl mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">{person.name}</h3>
            <p className="text-sm text-gray-600">{person.title}</p>
            <p className="text-sm font-semibold mt-2 whitespace-pre-line">{person.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ABSection6;
