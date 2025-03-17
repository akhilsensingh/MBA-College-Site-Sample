import HLSection1 from "./ContentSectionComponents/HighlightComponents/HLSection1";
import HLSection2 from "./ContentSectionComponents/HighlightComponents/HLSection2";
import HLSection3 from "./ContentSectionComponents/HighlightComponents/HLSection3";
import HLSection4 from "./ContentSectionComponents/HighlightComponents/HLSection4";

const ContentSection = ({ selectedTab }) => {
    switch (selectedTab) {
        case 'Highlights':
            return (
                <div className="pr-30 pl-30 pt-10 bg-white">
                    <HLSection1/>
                    <HLSection2/>
                    <HLSection3/>
                    <HLSection4/>
                </div>
            );

        case 'Curriculum':
            return (
                <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold">Curriculum Overview</h2>
                    <p className="text-lg text-gray-300">Detailed information about the curriculum will be displayed here.</p>
                </div>
            );

        case 'Admissions':
            return (
                <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold">Admissions & Fees</h2>
                    <p className="text-lg text-gray-300">Admission details, fee structures, and more will be displayed here.</p>
                </div>
            );

        default:
            return null;
    }
};

export default ContentSection;
