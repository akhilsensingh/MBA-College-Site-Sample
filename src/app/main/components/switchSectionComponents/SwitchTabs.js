const SwitchTabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="flex space-x-4 mb-6">
            {['Highlights', 'Curriculum', 'Admissions'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-2 rounded-lg text-lg transition-all 
                        ${selectedTab === tab ? 'bg-yellow-500 text-black font-semibold' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default SwitchTabs;
