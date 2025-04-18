'use client';
import { ArrowUpRight } from "lucide-react";

const HLSection4 = ({ data }) => {
  return (
    <div className="bg-white py-16 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-black flex items-center space-x-2">
        {data.title} <span className="text-yellow-500">{data.highlight}</span>
      </h2>
      <div className="bg-white shadow-lg rounded-xl mt-6 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {data.items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex justify-between items-center border-2 border-transparent hover:border-orange-400 rounded-full px-4 py-3 transition-all"
          >
            <span className="text-lg text-black">{item.title}</span>
            <ArrowUpRight className="text-black" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HLSection4;
