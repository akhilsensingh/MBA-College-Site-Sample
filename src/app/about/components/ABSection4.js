'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const milestones = [
  {
    year: 2020,
    title: 'The Genesis - Masters’ Union is Established',
    points: [
      'The first PGP TBM application process begins',
      'Renowned founding faculty join Masters’ Union',
      'The first PGP TBM class commences with 66 students',
    ],
  },
  {
    year: 2021,
    title: 'The Advancement - All About Our Firsts',
    points: [
      'Our first cohort graduates',
      'Unveiling our first placement report, with avg. package of ₹29.12 lakh',
      'Our first international recruitment at Google Dublin',
    ],
  },
  {
    year: 2022,
    title: 'The Expansion - New Additions',
    points: [
      'Our second campus is built',
      'Our flagship UG Programme with 150 students is launched',
      'Launch of our PGP RISE programme for working professionals',
    ],
  },
  {
    year: 2023,
    title: 'The Achievements',
    points: [
      'Our first Demo Day where students pitched their startups to 100+ VCs',
      'Former SoftBank India head, Manoj Kohli is appointed Chairperson',
    ],
  },
  {
    year: 2024,
    title: 'The Journey Ahead',
    points: [
      'We grow from a 50-member team to more than 300',
      'We welcome our second UG cohort of 250+ students',
      'Launch a first-of-its-kind industry-academia collaboration with PwC India',
    ],
  },
];

const ABSection4 = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.milestone-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-black text-white px-6 md:px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">A Journey Through Our Milestones</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Timeline Content */}
        <div className="lg:w-1/2" ref={containerRef}>
          {milestones.map((item, index) => (
            <div
              key={item.year}
              data-index={index}
              className={`milestone-section py-10 transition-opacity duration-500 ${
                activeIndex === index ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <div className={`text-lg font-semibold text-yellow-400`}>{item.year}</div>
              <div className="text-white font-bold mt-2">{item.title}</div>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc list-inside">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Fixed Visual */}
        <div className="lg:w-1/2 lg:sticky lg:top-24 flex items-center justify-center">
          <Image
            src="/unique-idea.jpg" // replace with your actual image path
            alt="Video placeholder"
            width={640}
            height={360}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ABSection4;
