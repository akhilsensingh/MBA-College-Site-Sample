const ASection3 = () => {
    const data = [
      {
        round: 'Round 1',
        applicationDeadline: '2nd February 2025',
        vbrDeadline: '9th February 2025',
        interview: '19th February - 3rd March 2025',
        fee: '₹3,500/-',
        status: 'CLOSED',
        statusColor: 'bg-red-500'
      },
      {
        round: 'Round 2',
        applicationDeadline: '23rd March 2025',
        vbrDeadline: '30th March 2025',
        interview: '9th - 21st April 2025',
        fee: '₹3,500/-',
        status: 'ACTIVE',
        statusColor: 'bg-green-500'
      },
      {
        round: 'Round 3',
        applicationDeadline: '10th May 2025',
        vbrDeadline: '17th May 2025',
        interview: '28th May - 20th June 2025',
        fee: '₹3,500/-',
        status: 'Apply now',
        statusColor: 'bg-blue-500'
      }
    ];
  
    return (
      <div className="text-black p-6">
        <h1 className="text-3xl font-bold mb-4">Application Timeline and Process (For PGP TBM YLC)</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Rounds</th>
                <th className="p-3">Application Deadline</th>
                <th className="p-3">Video Based Response (VBR) Deadline</th>
                <th className="p-3">Personal Interview</th>
                <th className="p-3">Application Fee</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{item.round}</td>
                  <td className="p-3">{item.applicationDeadline}</td>
                  <td className="p-3">{item.vbrDeadline}</td>
                  <td className="p-3">{item.interview}</td>
                  <td className="p-3">{item.fee}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 text-white rounded-full ${item.statusColor}`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ASection3;
  