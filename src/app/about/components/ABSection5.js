'use client';

import Image from 'next/image';

const ABSection5 = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Block */}
        <div className="flex-1">
          <p className="text-sm uppercase font-semibold text-gray-400 mb-2">
            ✦ Building a Disruptive B-School
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
            Creating a<br />Community of<br />Changemakers
          </h2>
        </div>

        {/* Center Image */}
        <div className="flex-1">
          <Image
            src="/chairperson.jpg" // update this path if needed
            alt="Chairperson Mr. Manoj Kohli"
            width={480}
            height={480}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Right Quote Card */}
        <div className="flex-1">
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-1">
              Hear From Our Chairperson
            </h3>
            <p className="font-medium text-gray-700 mb-4">Mr. Manoj Kohli</p>
            <p className="text-gray-600 text-sm relative z-10">
              I am inspired by the collective passion and drive of our students, faculty, and staff. We are a community of changemakers, pioneers, and lifelong learners who are committed to making a positive impact. A future of education is not just a means to an end, but a transformative journey that shapes leaders and innovators.
            </p>
            {/* Quotation mark icon */}
            <div className="absolute text-6xl text-gray-300 right-6 bottom-4 select-none pointer-events-none">
              &#10077;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABSection5;
