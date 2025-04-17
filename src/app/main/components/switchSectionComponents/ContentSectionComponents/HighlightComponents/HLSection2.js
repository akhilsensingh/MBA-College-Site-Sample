'use client';
const HLSection2 = ({ data }) => {
  return (
    <div className="bg-gray-100 py-16 px-8 md:px-20">
      <h2 className="text-3xl font-bold text-black mb-8">{data.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-xl font-semibold text-yellow-600">{stat.value}</p>
            <p className="text-sm text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HLSection2;
