import ASection1 from "./ContentSectionComponents/AdmissionsComponents/ASection1";
import ASection2 from "./ContentSectionComponents/AdmissionsComponents/ASection2";
import ASection3 from "./ContentSectionComponents/AdmissionsComponents/ASection3";
import ASection4 from "./ContentSectionComponents/AdmissionsComponents/ASection4";
import ASection5 from "./ContentSectionComponents/AdmissionsComponents/ASection5";
import ASection6 from "./ContentSectionComponents/AdmissionsComponents/ASection6";
import ASection7 from "./ContentSectionComponents/AdmissionsComponents/ASection7";
import CSection1 from "./ContentSectionComponents/CurriculumComponents/CSection1";
import CSection2 from "./ContentSectionComponents/CurriculumComponents/CSection2";
import CSection3 from "./ContentSectionComponents/CurriculumComponents/CSection3";
import CSection4 from "./ContentSectionComponents/CurriculumComponents/CSection4";
import HLSection1 from "./ContentSectionComponents/HighlightComponents/HLSection1";
import HLSection2 from "./ContentSectionComponents/HighlightComponents/HLSection2";
import HLSection3 from "./ContentSectionComponents/HighlightComponents/HLSection3";
import HLSection4 from "./ContentSectionComponents/HighlightComponents/HLSection4";

const ContentSection = ({ selectedTab }) => {
    switch (selectedTab) {
        case 'Highlights':
            return (
                <div className="pr-30 pl-30 pt-10 bg-white">
                    <div className="mb-4">
                        <HLSection1 />
                    </div>
                    <div className="mb-4">
                        <HLSection2 />
                    </div>
                    <div className="mb-4">
                        <HLSection3 />
                    </div>
                    <div className="mb-4">
                        <HLSection4 />
                    </div>
                </div>
            );

        case 'Curriculum':
            return (
                <div className="pr-30 pl-30 pt-10 bg-white">
                    <div className="mb-4">
                        <CSection1 />
                    </div>
                    <div className="mb-4">
                        <CSection2 />
                    </div>
                    <div className="mb-4">
                        <CSection3 />
                    </div>
                    <div className="mb-4">
                        <CSection4 />
                    </div>
                </div>
            );

        case 'Admissions':
            return (
                <div className="pr-30 pl-30 pt-10 bg-white">
                    <div className="mb-4">
                        <ASection1 />
                    </div>
                    <div className="mb-4">
                       <ASection2 />
                    </div>
                    <div className="mb-4">
                       <ASection3 />
                    </div>
                    <div className="mb-4">
                       <ASection4 />
                    </div>
                    <div className="mb-4">
                       <ASection5 />
                    </div>
                    <div className="mb-4">
                       <ASection6 />
                    </div>
                    <div className="mb-4">
                        <ASection7 />
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default ContentSection;
