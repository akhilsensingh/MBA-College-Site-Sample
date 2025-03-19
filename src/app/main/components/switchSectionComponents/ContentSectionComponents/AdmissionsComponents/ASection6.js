import React from 'react';

const ASection6 = () => {
  const hostelData = [
    { title: 'No of Rooms', premium: '62', budget: '62' },
    { title: 'Room Size', premium: '120 Sq. Ft + Balcony 24 Sq. Ft', budget: '80 Sq. Ft' },
    { title: 'Washroom Size', premium: '33 Sq. Ft', budget: '25 Sq. Ft' },
    { title: 'Window', premium: 'Has attached balcony', budget: 'Window opens into shaft' },
    { title: 'Distance from Campus', premium: '5 kms from DLF CyberPark Campus', budget: '5 kms from DLF CyberPark Campus' },
    { title: 'Common Area', premium: 'Large common facilities on the ground floor', budget: 'Large common facilities on the ground floor' },
    { title: 'Type of Rooms', premium: 'Single occupancy (dedicated washroom, not attached)', budget: 'Single occupancy (dedicated washroom, not attached)' }
  ];

  const pricingData = [
    { category: 'Single Room', stay: '16 months', tbmPrice: '₹6,45,120', ylcPrice: '₹6,45,120', deposit: '₹50,000' },
    { category: 'Twin Room', stay: '16 months', tbmPrice: '₹3,94,240', ylcPrice: '₹3,94,240', deposit: '₹50,000' }
  ];

  return (
    <div className="p-6 text-black">
      <h2 className="text-3xl font-bold mb-4">Hostel Details & Fees</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Location</th>
              <th className="p-4">Premium Single</th>
              <th className="p-4">Budget Single</th>
            </tr>
          </thead>
          <tbody>
            {hostelData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{item.title}</td>
                <td className="p-4">{item.premium}</td>
                <td className="p-4">{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-8">Pricing</h3>
        <table className="w-full border border-gray-200 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Room Category</th>
              <th className="p-4">Duration of Stay</th>
              <th className="p-4">PGP TBM</th>
              <th className="p-4">PGP YLC</th>
              <th className="p-4">Security Deposit</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.stay}</td>
                <td className="p-4">{item.tbmPrice}</td>
                <td className="p-4">{item.ylcPrice}</td>
                <td className="p-4">{item.deposit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-sm text-gray-600">Hostel is non-mandatory & not included in tuition fees.</div>
      </div>
    </div>
  );
};

export default ASection6;
