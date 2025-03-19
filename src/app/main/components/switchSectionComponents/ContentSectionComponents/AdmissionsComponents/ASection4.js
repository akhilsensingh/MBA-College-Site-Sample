"use client";

import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";

// Mock data for the application steps
const applicationSteps = [
  {
    id: "01",
    title: "Complete the Application Form",
    content: [
      {
        heading: "Fill out your details",
        description: "You will need:",
        bullets: [
          "Your latest resume - Applicants are allowed to choose their own format (needs to be clear and concise). Feel free to use our <a href='#' class='text-pink-500'>sample resume format</a>.",
          "Your qualification documents - Upload all documents related to your work experience, academics and extra-curriculars to support your application.",
        ],
      },
      {
        heading: "Upload your CAT/GMAT/GRE score",
        description:
          "You are welcome to submit your CAT/GMAT/GRE scores in your application if you feel it will improve your candidature. However, this is not mandatory.",
      },
    ],
  },
  {
    id: "02",
    title: "Video Based Response",
    content: [
      {
        description:
          "After submitting the application form, all applicants will be required to submit a short video based on a prompt given on the spot to assess your communication skills, with a focus on clear and structured thinking. You will have time till 7 days after the deadline of the respective round to complete your VBR. You don't need extensive preparation—just show up as your true self.",
        bullets: ["Preparation Time: 3 minutes", "VBR Duration: Approximately 3 minutes"],
      },
    ],
  },
  {
    id: "03",
    title: "Personal Interview & AI Assessment",
    content: [
      {
        description:
          "Following a comprehensive evaluation, shortlisted applicants will receive an invitation to proceed to the interview stage.",
        bullets: [
          "If selected, applicants will be informed of the interview date, venue, and time 3-5 days prior to the interview.",
          "Please note that every shortlisted student will need to take an AI Assessment on the day of their personal interview, at the venue itself. This assessment will focus purely on assessing your critical thinking skills, and what you can bring to Masters' Union.",
        ],
      },
    ],
  },
  {
    id: "04",
    title: "Final Admission Decision",
    content: [
      {
        description:
          "Based on the final decision of the admissions committee, applicants will be slotted into the following categories-",
        bullets: [
          "Applicants who have been offered admission to Masters' Union will receive their decision along with the financial structure for the upcoming programme.",
          "For applicants who are waitlisted, the admissions committee will reconvene and promote candidates from the waitlisted to the accepted pool, on a regular basis. Please note that we do not maintain a ranked waitlist. Your admission is dependent on the spots that might open up later.",
          "If you've received a rejection email, you cannot apply in any subsequent round in the same academic year. You are welcome to re-apply to the programme in the next academic year.",
        ],
      },
    ],
  },
];

export default function ASection4() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which step is currently in the middle of the viewport
      let newActiveStep = 0;
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const middle = window.innerHeight / 2;

          if (top <= middle && bottom >= middle) {
            newActiveStep = index;
          }
        }
      });

      setActiveStep(newActiveStep);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -ml-[1px]"></div>

        {/* Steps */}
        {applicationSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            className="relative flex flex-col md:flex-row md:items-start mb-16 md:mb-24"
          >
            {/* Left side - Step number and title (on mobile this is at the top) */}
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 flex flex-col md:block">
              <div className="text-yellow-500 font-medium mb-1">{step.id}.</div>
              <h2 className="text-2xl font-bold mb-1">{step.title}</h2>
              <div className="relative h-1 w-24 md:ml-auto">
                <svg width="100" height="8" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 4C20 1 30 7 50 4C70 1 80 7 99 4"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
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

            {/* Center - Timeline indicator */}
            <div className="absolute left-0 md:left-1/2 top-0 -ml-[14px] md:-ml-[24px] z-10">
              <div
                className={`w-[28px] h-[28px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center ${
                  activeStep === index ? "bg-yellow-400" : "bg-gray-200"
                } transition-colors duration-300`}
              >
                <FileText
                  className={`w-4 h-4 md:w-6 md:h-6 ${activeStep === index ? "text-white" : "text-gray-500"}`}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 md:pl-12 pl-10 md:pl-0">
              {step.content.map((contentBlock, contentIndex) => (
                <div key={contentIndex} className="mb-6">
                  {contentBlock.heading && <h3 className="font-semibold text-lg mb-2">{contentBlock.heading}</h3>}
                  {contentBlock.description && <p className="text-gray-700 mb-3">{contentBlock.description}</p>}
                  {contentBlock.bullets && contentBlock.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {contentBlock.bullets.map((bullet, bulletIndex) => (
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

