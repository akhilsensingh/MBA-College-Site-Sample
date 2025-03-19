import React from 'react';

const CSection1 = () => {
  const courses = [
    { code: 'AIML', name: 'AI & ML' },
    { code: 'FIFI', name: 'Finance and Fintech' },
    { code: 'COMM', name: 'Communication & Self Development' },
    { code: 'MAST', name: 'Management & Strategy' },
    { code: 'SMA', name: 'Sales & Marketing' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="max-w-lg">
        <h6 className="text-gray-500 text-sm mb-2">✨ INNOVATIVE SPECIALISATIONS</h6>
        <h1 className="text-4xl font-bold mb-4">Explore a Future-Ready Curriculum</h1>
        <p className="text-gray-600 mb-6">Study core industry-focused modules to gain practical knowledge and skills for the digital age.</p>
        <button className="border border-gradient-to-r from-blue-400 to-orange-400 text-black font-semibold px-6 py-3 rounded-full flex items-center hover:bg-gray-100">
          Explore Course Roster
          <span className="ml-2">⬇</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 md:mt-0 relative">
        {courses.map((course, index) => (
          <div key={index} className={`p-6 bg-white shadow-md rounded-xl transform ${index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'}` }>
            <span className="text-black bg-yellow-400 px-2 py-1 rounded-md text-xs font-bold">{course.code}</span>
            <h3 className="mt-4 text-lg font-semibold">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSection1;