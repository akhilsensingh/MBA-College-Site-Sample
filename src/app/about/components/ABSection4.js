'use client';

import { Timeline } from "@/app/components/ui/TimeLine";

const milestones = [
  {
    year: "2020",
    title: 'The Genesis - Masters’ Union is Established',
    points: [
      'The first PGP TBM application process begins',
      'Renowned founding faculty join Masters’ Union',
      'The first PGP TBM class commences with 66 students',
    ],
  },
  {
    year: "2021",
    title: 'The Advancement - All About Our Firsts',
    points: [
      'Our first cohort graduates',
      'Unveiling our first placement report, with avg. package of ₹29.12 lakh',
      'Our first international recruitment at Google Dublin',
    ],
  },
  {
    year: "2022",
    title: 'The Expansion - New Additions',
    points: [
      'Our second campus is built',
      'Our flagship UG Programme with 150 students is launched',
      'Launch of our PGP RISE programme for working professionals',
    ],
  },
  {
    year: "2023",
    title: 'The Achievements',
    points: [
      'Our first Demo Day where students pitched their startups to 100+ VCs',
      'Former SoftBank India head, Manoj Kohli is appointed Chairperson',
    ],
  },
  {
    year: "2024",
    title: 'The Journey Ahead',
    points: [
      'We grow from a 50-member team to more than 300',
      'We welcome our second UG cohort of 250+ students',
      'Launch a first-of-its-kind industry-academia collaboration with PwC India',
    ],
  },
];

export default function ABSection4Timeline() {
  const timelineData = milestones.map((milestone) => ({
    title: milestone.year,
    content: (
      <div>
        <h3 className="text-sm font-semibold text-yellow-500 mb-1">{milestone.title}</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
          {milestone.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <img
            src="/unique-idea.jpg"
            alt={`Milestone for ${milestone.year}`}
            width={500}
            height={300}
            className="h-24 md:h-40 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip bg-black text-white py-12 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
        A Journey Through Our Milestones
      </h2>
      <Timeline data={timelineData} />
    </div>
  );
}
