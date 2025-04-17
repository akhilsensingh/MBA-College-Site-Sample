import React from 'react';

const ASection2 = ({ data }) => {
  const { subtitle, title, subtitle2, rounds } = data;

  return (
    <div className="py-12 text-black px-6">
      <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <h3 className="text-2xl font-semibold mb-8">{subtitle2}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Rounds</th>
              <th className="p-4">Application Deadline</th>
              <th className="p-4">VBR Deadline</th>
              <th className="p-4">Personal Interview</th>
              <th className="p-4">Application Fee</th>
              <th className="p-4">Admission Fee Deadline</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {rounds.map((round, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{round.name}</td>
                <td className="p-4">{round.applicationDeadline}</td>
                <td className="p-4">{round.vbrDeadline}</td>
                <td className="p-4">{round.interviewDates}</td>
                <td className="p-4">{round.applicationFee}</td>
                <td className="p-4">{round.admissionFee}</td>
                <td className="p-4">
                  {round.status === 'CLOSED' && <span className="text-red-600 font-semibold">CLOSED</span>}
                  {round.status === 'ACTIVE' && <span className="text-green-600 font-semibold">ACTIVE</span>}
                  {round.status === 'UPCOMING' && <span className="text-yellow-600 font-semibold">UPCOMING</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ASection2;