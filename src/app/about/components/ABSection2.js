'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const ABSection2 = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [showTabs, setShowTabs] = useState(false);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const visionTop = visionRef.current?.getBoundingClientRect().top || 0;
      const visionBottom = visionRef.current?.getBoundingClientRect().bottom || 0;
      const missionTop = missionRef.current?.getBoundingClientRect().top || 0;
      const missionBottom = missionRef.current?.getBoundingClientRect().bottom || 0;

      const viewportHeight = window.innerHeight;

      // Set active tab based on which section is more in view
      if (visionTop < viewportHeight / 2 && missionTop > viewportHeight / 2) {
        setActiveTab('vision');
      } else if (missionTop < viewportHeight / 2) {
        setActiveTab('mission');
      }

      // Show/hide tab group based on whether either section is visible
      const isVisionVisible = visionBottom > 0 && visionTop < viewportHeight;
      const isMissionVisible = missionBottom > 0 && missionTop < viewportHeight;

      setShowTabs(isVisionVisible || isMissionVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="transition-colors duration-700" style={{ backgroundColor: activeTab === 'mission' ? '#000' : '#fff' }}>
      {/* Sticky Tab Switcher */}
      {showTabs && (
       <div className="sticky top-[60px] z-40 bg-transparent backdrop-blur py-4 flex justify-center">
          <div className="border border-yellow-500 rounded-full overflow-hidden flex">
            <button
              className={classNames(
                'px-6 py-2 font-semibold transition-colors duration-300',
                activeTab === 'vision'
                  ? 'bg-gradient-to-r from-sky-400 to-yellow-400 text-white'
                  : 'text-black bg-white'
              )}
            >
              VISION
            </button>
            <button
              className={classNames(
                'px-6 py-2 font-semibold transition-colors duration-300',
                activeTab === 'mission'
                  ? 'bg-gradient-to-r from-yellow-400 to-sky-400 text-black'
                  : 'text-black bg-white'
              )}
            >
              MISSION
            </button>
          </div>
        </div>
      )}

      {/* Vision Section */}
      <section ref={visionRef} className="flex flex-col md:flex-row items-center max-w-6xl mx-auto py-16 px-4 text-black">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            To iterate an education model that maximises <span className="font-bold">human potential</span>
          </h2>
          <p className="text-gray-500">“Why” Masters’ Union Exists</p>
        </div>
        <div className="flex-1 text-center">
          <Image src="/vision.jpg" alt="Vision" width={500} height={400} className="rounded-xl mx-auto" />
        </div>
        <div className="flex-1 mt-6 md:mt-0 text-gray-700 text-sm space-y-4">
          <p>✦ The age-old education model is built on memorization, conformity & indoctrination</p>
          <hr />
          <p>✦ We want to build a model that's hands-on, rooted in reality & has a high degree of throughput</p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="flex flex-col md:flex-row items-center max-w-6xl mx-auto py-16 px-4 text-white">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            To build a <span className="font-bold">globally eminent institution</span> that continuously challenges pedagogy & processes to deliver unparalleled human growth
          </h2>
          <p className="text-gray-400">“What” Masters’ Union is building</p>
        </div>
        <div className="flex-1 text-center">
          <Image src="/mission.jpg" alt="Mission" width={500} height={400} className="rounded-xl mx-auto" />
        </div>
        <div className="flex-1 mt-6 md:mt-0 text-gray-400 text-sm space-y-4">
          <p>✦ By not being a prisoner of our own legacy & continuously iterating on curriculum</p>
          <hr />
          <p>✦ By teaching as if a student is not a vessel that needs filling, but a candle that needs lighting</p>
          <hr />
          <p>✦ By always thinking big, striving to paint outside the lines while always being student centric</p>
        </div>
      </section>
    </div>
  );
};

export default ABSection2;
