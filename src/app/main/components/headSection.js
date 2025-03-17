import Link from 'next/link';

const HeadSection = () => {
  return (
    <div className="bg-blsack text-white min-h-screen flex items-center justify-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
                {/* Left Side Content */}
                <div>
                    <h1 className="text-4xl font-bold leading-tight">
                        PGP in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                            Technology and Business Management
                        </span>
                    </h1>
                    <p className="mt-4 text-gray-400 text-sm">16-month full-time programme for experienced leaders</p>
                    <p className="text-sm text-gray-400">24-month full-time programme for freshers (&lt;1 year of work experience)</p>
                    
                    <div className="mt-6 flex gap-4">
                        <Link href="#apply">
                            <button className="px-6 py-3 rounded-lg border border-orange-400 text-white text-lg hover:bg-orange-500 transition">
                                Apply Now ↗
                            </button>
                        </Link>
                        <Link href="#placement">
                            <button className="px-6 py-3 rounded-lg border border-white text-white text-lg hover:bg-white hover:text-black transition">
                                Download Placement Report →
                            </button>
                        </Link>
                    </div>
                </div>
                
                {/* Right Side YouTube Frame */}
                <div className="relative w-full">
                    <div className="absolute -top-5 -left-5 w-full h-full bg-black rounded-lg shadow-lg transform -rotate-6"></div>
                    <div className="relative bg-black p-4 rounded-lg shadow-lg">
                        <iframe 
                            className="w-full h-60 md:h-72 lg:h-80 rounded-lg" 
                            src="https://www.youtube.com/watch?v=xDnkXzmCZ3w" 
                            title="Life At Masters' Union"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
  );
};
export default HeadSection;