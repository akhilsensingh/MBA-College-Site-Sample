
const ASection3 = ({ data }) => {
  const { title, table } = data;

  return (
    <div className="text-black p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
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
            {table.map((item, index) => (
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
