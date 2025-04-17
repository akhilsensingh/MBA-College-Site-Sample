'use client';
const HLSection3 = ({ data }) => {
  return (
    <div className="bg-black text-white py-16 px-8 md:px-20 flex flex-col md:flex-row items-center rounded-2xl">
      <div className="md:w-1/2 space-y-4">
        <p className="text-yellow-400 font-semibold flex items-center">{data.highlight}</p>
        <h2 className="text-4xl font-bold">{data.title}</h2>
        <p className="text-gray-400">{data.description}</p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={data.image} alt="Founder Fellowship" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default HLSection3;
