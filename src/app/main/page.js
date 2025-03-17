'use client';

import { useState } from 'react';
import ContentSection from "@/app/main/components/switchSectionComponents/ContentSection";
import SwitchTabs from './components/switchSectionComponents/SwitchTabs';
import HeadSection from './components/headSection';

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState('Highlights');

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-2">
            <HeadSection />
            {/* Switchable Tabs */}
            <SwitchTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Dynamic Content */}
            <div className="w-full bg-white">
                <ContentSection selectedTab={selectedTab} />
            </div>
        </div>
    );
};

export default MainPage;
