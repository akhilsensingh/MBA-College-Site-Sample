import React from 'react';

const criteria = [
  {
    id: '01',
    title: 'Internships and Work Experience',
    image: '/path/to/image1.png'
  },
  {
    id: '02',
    title: 'Academics & Co-Curricular',
    image: '/path/to/image2.png'
  },
  {
    id: '03',
    title: 'Communication',
    image: '/path/to/image3.png'
  }
];

const ASection1 = () => {
  return (
    <div className="py-12 px-6">
      <p className="text-sm text-gray-500 mb-2">⭐ ENROLLMENT CHECKLIST</p>
      <h2 className="text-3xl text-black font-bold mb-8">Admission Criteria</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {criteria.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
              <p className="text-white text-sm">{item.id}</p>
              <h3 className="text-xl text-white font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ASection1;
