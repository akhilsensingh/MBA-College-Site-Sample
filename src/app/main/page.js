'use client';

import { useState, useEffect } from 'react';
import ContentSection from "@/app/main/components/switchSectionComponents/ContentSection";
import SwitchTabs from './components/switchSectionComponents/SwitchTabs';
import HeadSection from './components/headSection';

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState('Highlights');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-2">
            <HeadSection />
            {/* Switchable Tabs */}
            <div className={`w-full flex justify-center ${isSticky ? 'sticky top-0 z-50' : ''}`}>
                <div className="bg-black bg-opacity-50 w-full flex justify-center p-4">
                    <SwitchTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                </div>
            </div>

            {/* Dynamic Content */}
            <div className="w-full bg-white">
                <ContentSection selectedTab={selectedTab} />
            </div>
        </div>
    );
};

export default MainPage;
