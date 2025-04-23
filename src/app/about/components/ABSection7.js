'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ABSection7({ data }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]);

  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-gray-400 mb-2">{data.subtitle}</p>
        <h2 className="text-4xl font-bold text-black mb-4">
          {data.title}
        </h2>
        <p className="text-gray-600 max-w-3xl">
          {data.description}
        </p>

        {/* Tabs */}
        <div className="mt-10 bg-black rounded-xl flex flex-wrap overflow-x-auto">
          {data.tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 whitespace-nowrap font-semibold transition-colors duration-300 ${
                activeTab === tab ? 'text-green-400' : 'text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {data.tabData[activeTab]?.map((logo, idx) => (
            <div
              key={idx}
              className="aspect-square bg-white shadow-sm rounded flex items-center justify-center border border-gray-100"
            >
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={120}
                height={80}
                className="object-contain max-h-[60px]"
              />
            </div>
          )) || <p className="col-span-full text-center text-gray-400">No logos added yet.</p>}
        </div>
      </div>
    </div>
  );
}
