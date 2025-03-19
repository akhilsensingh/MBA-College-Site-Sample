const HLSection1 = () => {
    return (
        <div className="bg-gradient-to-r from-green-300 to-yellow-400 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Video Section */}
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-60 md:h-72 lg:h-80 rounded-lg"
                        src="https://www.youtube.com/watch?v=xDnkXzmCZ3w"
                        title="Life At Masters' Union"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                {/* Info Cards Section */}
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { title: 'Duration', value: '16 Months', sub: '24 Months for Young Leaders' },
                        { title: 'Location', value: 'Gurugram', sub: 'DLF Cyberpark' },
                        { title: 'Format', value: 'Full Time', sub: 'Opt-in Residential' },
                        { title: 'Commencement Date', value: 'June 2025', sub: "For Cohort of '26" },
                    ].map((item, index) => (
                        <div key={index} className="bg-white text-left p-6 pt-10 rounded-lg shadow-md ">
                            <p className="text-gray-500 text-sm">{item.title}</p>
                            
                            <h3 className="text-4xl text-black font-bold">{item.value}</h3>
                            <p className="text-gray-600 text-sm">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HLSection1;
