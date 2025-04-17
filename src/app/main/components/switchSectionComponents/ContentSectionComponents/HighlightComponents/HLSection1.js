'use client';
const HLSection1 = ({ data }) => {
  return (
    <div className="bg-white py-16 px-8 md:px-20">
      <h2 className="text-3xl font-bold text-black mb-4">{data.title}</h2>
      <p className="text-gray-600 mb-8">{data.description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {data.highlights.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img src={item.icon} alt={item.label} className="w-12 h-12 mb-2" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HLSection1;
