import React from 'react';

const CSection3 = ({ data }) => {
  const { title, description, cards } = data;

  return (
    <div className="py-12 px-6 text-black bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <p className="text-center text-gray-600 mb-12">{description}</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((item, index) => (
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