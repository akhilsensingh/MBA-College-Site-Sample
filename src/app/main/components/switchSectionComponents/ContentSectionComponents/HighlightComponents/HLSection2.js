const HLSection2 = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Header Section */}
            <h2 className="text-3xl font-bold text-black">
                Our PG Programmes Are Designed <br /> 
                For <span className="text-black">Young Leaders</span> and <span className="text-black">Experienced Professionals</span>
            </h2>
            <p className="text-gray-500 mt-2">
                The PGP TBM YLC is a newly introduced and slightly expanded programme that emphasises on foundational concepts.
            </p>

            {/* Table */}
            <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse border rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-black text-white">
                            <th className="p-4 text-left"></th>
                            <th className="p-4 text-center">PGP TBM YLC</th>
                            <th className="p-4 text-center">PGP TBM</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {[
                            { label: 'Duration', ylc: '24 months', tbm: '16 months' },
                            { label: 'Eligibility', ylc: '0-1 year of Pre-MBA work ex', tbm: '>1 year of Pre-MBA work ex' },
                            { label: 'Number of credits', ylc: '140 (Inclass + Outclass)', tbm: '100 (Inclass + Outclass)' },
                            { label: 'Internship', ylc: 'Mandatory', tbm: 'Non mandatory' },
                            { label: 'Terms', ylc: '8 terms of 3-4 months', tbm: '8 terms of 1-2 months' },
                            { label: 'Avg. post MBA CTC', ylc: '₹23.59 L', tbm: '₹28.52 L' },
                            { label: 'Highest CTC', ylc: '₹36 L', tbm: '₹61.8 L' },
                            { label: 'Download placement report', ylc: <a href="#" className="text-blue-600 hover:underline">Download report ↗</a>, tbm: <a href="#" className="text-blue-600 hover:underline">Download report ↗</a> },
                        ].map((row, index) => (
                            <tr key={index} className="border-t">
                                <td className="p-4 font-medium">{row.label}</td>
                                <td className="p-4 text-center">{row.ylc}</td>
                                <td className="p-4 text-center">{row.tbm}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Apply Button */}
            <div className="mt-6 flex justify-center">
                <button className="border-2 border-black text-black px-6 py-2 rounded-full flex items-center hover:bg-black hover:text-white transition">
                    Apply now <span className="ml-2">↗</span>
                </button>
            </div>
        </div>
    );
};

export default HLSection2;
