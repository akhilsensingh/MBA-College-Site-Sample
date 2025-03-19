import React from 'react';

const CSection3 = () => {
  const data = [
    {
      title: 'Immerse at World’s Top Ranked B-Schools',
      description: 'Study abroad at prestigious global B-schools such as INSEAD and Bocconi and gain unmatched international insights.',
      image: '/path/to/image1.png',
    },
    {
      title: 'Get Inside Most Iconic International Brands',
      description: 'From Japan’s Toyota to Italy’s Ferrari, visit top international brands and gain first-hand exposure to business practices.',
      image: '/path/to/image2.png',
    },
    {
      title: 'Build Your Network & Crack Jobs Abroad',
      description: 'The international exposure equips you to crack jobs abroad in countries like Ireland, UAE & even USA.',
      image: '/path/to/image3.png',
    },
  ];

  return (
    <div className="py-12 px-6 text-black bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Go Global with <span className="text-black">Masters’ Union’s</span> Unique International Immersions</h2>
      <p className="text-center text-gray-600 mb-12">Interact with <span className="font-semibold">global C-suite leaders</span> during industrial visits and workshops in cities across the world, and participate in classes at <span className="font-semibold">prestigious B-schools.</span></p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSection3;
