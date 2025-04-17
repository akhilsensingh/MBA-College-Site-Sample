'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ABSection3 = () => {
  return (
    <section className="w-full bg-gradient-to-r from-sky-400 via-green-200 to-yellow-400 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-xl">
        {/* Text Content */}
        <div className="flex-1">
          <p className="uppercase text-sm font-semibold text-gray-400 mb-2">✦ Global Ambition</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
            Our aim is to become a global <br /> top 10 B-school
          </h2>
          <button className="inline-flex items-center px-6 py-2 border-2 border-yellow-500 text-black font-semibold rounded-full hover:shadow-md transition-all">
            Read More
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1">
          <Image
            src="/global-ambition.png" // make sure to place this in /public folder
            alt="Economic Times News"
            width={800}
            height={600}
            className="rounded-2xl w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ABSection3;
