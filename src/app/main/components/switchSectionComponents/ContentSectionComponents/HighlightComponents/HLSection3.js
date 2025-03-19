const HLSection3 = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-20 flex flex-col md:flex-row items-center rounded-2xl">
            {/* Left Content Section */}
            <div className="md:w-1/2 space-y-4">
                <p className="text-yellow-400 font-semibold flex items-center">
                    ✦ INCUBATOR SUPPORT
                </p>
                <h2 className="text-4xl font-bold">
                    Fuel Your <span className="text-white">Startup Journey</span> With Our <br /> 
                    <span className="text-white">Founder Fellowship</span>
                </h2>
                <p className="text-gray-400">
                    The Masters' Union Founder Fellowship is designed to <span className="font-bold">empower serious founders</span>, 
                    providing not just financial aid, but a conducive ecosystem for your startup success. 
                    Up to 25 serious founders in the PGP Cohort will be awarded 
                    <span className="font-bold"> ₹40,000 per month</span> to support their startup endeavours for up to a year.
                </p>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img 
                    src="../public/Founder_Fellowship.jpg" 
                    alt="Founder Fellowship" 
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default HLSection3;
