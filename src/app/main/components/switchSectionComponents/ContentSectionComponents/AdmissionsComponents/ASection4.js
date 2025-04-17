
"use client";

import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";

export default function ASection4({ data }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;
      let newActiveStep = 0;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          if (top <= middle && bottom >= middle) {
            newActiveStep = index;
          }
        }
      });

      setActiveStep(newActiveStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-6xl text-black mx-auto p-4 md:p-8">
      <div className="relative">
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -ml-[1px]"></div>
        {data.steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            className="relative flex flex-col md:flex-row md:items-start mb-16 md:mb-24"
          >
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 flex flex-col md:block">
              <div className="text-yellow-500 font-medium mb-1">{step.id}.</div>
              <h2 className="text-2xl font-bold mb-1">{step.title}</h2>
              <div className="relative h-1 w-24 md:ml-auto">
                <svg width="100" height="8" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4C20 1 30 7 50 4C70 1 80 7 99 4" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="4" x2="99" y2="4" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD700" />
                      <stop offset="0.5" stopColor="#FF69B4" />
                      <stop offset="1" stopColor="#00BFFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 top-0 -ml-[14px] md:-ml-[24px] z-10">
              <div className={`w-[28px] h-[28px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center ${activeStep === index ? "bg-yellow-400" : "bg-gray-200"} transition-colors duration-300`}>
                <FileText className={`w-4 h-4 md:w-6 md:h-6 ${activeStep === index ? "text-white" : "text-gray-500"}`} />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 pl-10 md:pl-0">
              {step.content.map((block, contentIndex) => (
                <div key={contentIndex} className="mb-6">
                  {block.heading && <h3 className="font-semibold text-lg mb-2">{block.heading}</h3>}
                  {block.description && <p className="text-gray-700 mb-3">{block.description}</p>}
                  {block.bullets && block.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {block.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span>
                          <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
