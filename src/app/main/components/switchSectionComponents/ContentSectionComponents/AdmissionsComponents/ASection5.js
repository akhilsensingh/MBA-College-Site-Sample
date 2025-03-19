import React from 'react';

const ASection5 = () => {
  const feeData = [
    { round: 'Round 1', admissionFee: '₹90,000/-', tuitionFee: '₹28,48,160/-', totalPayable: '₹29,38,160/-' },
    { round: 'Round 2', admissionFee: '₹90,000/-', tuitionFee: '₹28,48,160/-', totalPayable: '₹29,38,160/-' },
    { round: 'Round 3', admissionFee: '₹1,25,000/-', tuitionFee: '₹28,48,160/-', totalPayable: '₹29,73,160/-' }
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 min-h-screen p-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold">Getting Into Masters' Union</h2>
        <p className="mt-4 text-gray-600">Dive into this exclusive Q&A session where our admissions team answers all your questions about the process.</p>
        <div className="mt-8">
          <video className="w-full rounded-lg" controls>
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold">Fee Structure (PGP TBM and PGP TBM YLC)</h2>
        <table className="w-full mt-6 border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4">Rounds</th>
              <th className="p-4">Admission Fee <span className="text-yellow-400">(partially refundable)</span></th>
              <th className="p-4">Tuition Fee</th>
              <th className="p-4">Total Payable</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((item, index) => (
              <tr key={index} className="text-center border-t border-gray-300">
                <td className="p-4">{item.round}</td>
                <td className="p-4">{item.admissionFee}</td>
                <td className="p-4">{item.tuitionFee}</td>
                <td className="p-4">{item.totalPayable}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-gray-500">* The fee mentioned above is inclusive of all taxes.</div>
      </div>
    </div>
  );
};

export default ASection5;
