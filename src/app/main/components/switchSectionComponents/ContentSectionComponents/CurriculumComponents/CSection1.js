import React from 'react';

const CSection1 = ({ data }) => {
  const { title, subtitle, description, buttonText, courses } = data;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="max-w-lg">
        <h6 className="text-gray-500 text-sm mb-2">{subtitle}</h6>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="border border-gradient-to-r from-blue-400 to-orange-400 text-black font-semibold px-6 py-3 rounded-full flex items-center hover:bg-gray-100">
          {buttonText}
          <span className="ml-2">⬇</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 md:mt-0 relative">
        {courses.map((course, index) => (
          <div key={index} className={`p-6 bg-white shadow-md rounded-xl transform ${index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'}`}>
            <span className="text-black bg-yellow-400 px-2 py-1 rounded-md text-xs font-bold">{course.code}</span>
            <h3 className="mt-4 text-lg font-semibold">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSection1;