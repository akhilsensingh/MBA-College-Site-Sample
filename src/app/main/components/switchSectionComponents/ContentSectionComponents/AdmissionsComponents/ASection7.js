import React, { useState } from 'react';

const ASection7 = ({ data }) => {
  const { title, image, scholarships } = data;
  const [selectedScholarship, setSelectedScholarship] = useState(scholarships[0]);

  return (
    <div className="bg-black p-4 rounded-2xl text-white py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="my-8">
          <img src={image} alt="Scholarship Event" className="w-full h-80 object-cover rounded-lg" />
        </div>

        <div className="flex gap-8">
          <div className="w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-bold">100%</p>
              <p>Maximum merit-based scholarship received by a student.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg my-4">
              <p className="text-4xl font-bold">50+</p>
              <p>Scholarships available for the postgraduate batch.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-bold">100%</p>
              <p>Loan coverage for the programme and hostel fees.</p>
            </div>
          </div>

          <div className="w-2/3">
            <div>
              <h3 className="text-xl font-semibold">{selectedScholarship}</h3>
              <p className="mt-4">The {selectedScholarship} extends financial support to candidates with exceptional academic records and accomplishments. These scholarships are offered as partial waivers of the tuition fee, as decided by the admissions committee.</p>
            </div>

            <ul className="mt-8">
              {scholarships.map((scholarship, index) => (
                <li
                  key={index}
                  className={`cursor-pointer py-2 ${selectedScholarship === scholarship ? 'text-yellow-400' : ''}`}
                  onClick={() => setSelectedScholarship(scholarship)}
                >
                  {scholarship}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASection7;