"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

// Mock data structure for all terms
const courseData = [
  {
    term: 1,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Give an Inspiring Speech", "How to Write Persuasively"],
        },
        {
          title: "Finance & Fintech",
          courses: ["How to Understand Basic Financial Terminology", "How to Read and Analyse Financial Statements"],
        },
      ],
    },
    outClass: [
      {
        title: "Dropshipping Challenge",
        description:
          "From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue.",
        additionalText: "Download Dropshipping Report",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Sell All You Got: One Day Fair",
        description:
          "Students take their online products offline and compete for customers in a two-day fair with 1000+ footfall across prime locations in NCR.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 2,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Be Productive & Get Things Done", "How to Manage Personal Finances"],
        },
        {
          title: "Finance & Fintech",
          courses: ["How to Allocate Budgets and Control Costs", "How to Create an MIS for a Business"],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How to Develop a GTM Strategy Using Funnels",
            "How to Execute CRO and Increase AOV",
            "How to Leverage Amazon to Sell Your Products",
          ],
        },
        {
          title: "Management & Strategy",
          courses: [
            "How to Identify & Track Key Business Metrics",
            "How a Country's Economy Works",
            "How the (Micro) Economy Works",
          ],
        },
        {
          title: "Product & Tech",
          courses: ["How to Read and Write Code (Part 1 & 2)", "How to Design Surveys to Conduct Primary Research"],
        },
        {
          title: "AI & ML",
          courses: ["How LLMs & AI Actually Work"],
        },
        {
          title: "Liberal Arts",
          courses: ["Mapping 5000 Years of Indian History"],
        },
      ],
    },
    outClass: [
      {
        title: "Creator Challenge",
        description:
          "Learn marketing by building your own influencer brand. Create channels that run into thousands & even millions of followers.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Marketing Hackathon",
        description:
          "Dive into brand growth and market expansion with a hands-on challenge: tackle real-world problems presented by CMOs of Marico, Boat, MMT, and more!",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 3,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Craft a Compelling Personal Portfolio", "How to Master The Craft of Storytelling"],
        },
        {
          title: "Finance & Fintech",
          courses: ["How Time is Money", "How Does The Global Banking System Works"],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How to Craft a Brand Like Nike Using Vision, Tone, Identity",
            "How to Sell an Idea",
            "How to Build a Personal Brand",
            "How to Script, Record & Release Content for YouTube & Instagram",
          ],
        },
        {
          title: "Management & Strategy",
          courses: [],
        },
        {
          title: "Product & Tech",
          courses: [
            "How to Create a B Plan & Pitch Your Idea in 7 Slides",
            "How to Think Strategically About Your Business",
            "How to Network Effortlessly",
          ],
        },
        {
          title: "AI & ML",
          courses: ["How to Build AI Powered Products"],
        },
        {
          title: "Liberal Arts",
          courses: ["How China's Communism Has Evolved", "How International Relations Shape the World"],
        },
      ],
    },
    outClass: [
      {
        title: "Pre-Seed Cheque Challenge",
        description:
          "Validate and present your startup idea to fight for ₹15+ lakhs in pre-seed funding, and build your Minimum Viable Product (MVP).",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "In-the-Wild Consulting",
        description:
          "Get a taste of consulting, take on local businesses, revamp their strategies and processes, and drive them towards revenue growth.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 4,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Use Mental Models to Solve Problems", "How to Run Effective Meeting & Motivate Teams"],
        },
        {
          title: "Finance & Fintech",
          courses: ["How to Value Business", "How to Raise Debt & Equity Capital"],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How to Use & Manage CRM Tools",
            "How to Nail Content Marketing to Grow Your Business",
            "How to Sell, Follow Up & Close Deals",
            "How to Build a Community Around Your Idea",
          ],
        },
        {
          title: "Management & Strategy",
          courses: [
            "How to Make Rent/Buy Real Estate Decisions",
            "How to Manage a Crisis",
            "How to Motivate Your Teams & Give Feedback",
            "How to Use KPIs & KRAs to Improve Organizational Alignment",
          ],
        },
        {
          title: "Product & Tech",
          courses: [
            "How to Build Habit Forming Products",
            "How to Manage Developers & Software Projects Effectively",
            "How to Design UI/UX Using Figma",
          ],
        },
        {
          title: "AI & ML",
          courses: ["How to Use AI to Build Fast"],
        },
        {
          title: "Liberal Arts",
          courses: ["How African History Shaped its Politics", "Foreign Language - L2"],
        },
      ],
    },
    outClass: [
      {
        title: "Building Your Minimum Viable Product",
        description:
          "Turn theory into practice as you utilise insights from product management, operations, and strategy to build and debut a product for beta testing.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Blockchain Hackathon",
        description:
          "Showcase your talent and push boundaries of innovation, as you create blockchain solutions, network with peers and industry experts, and vie for top prizes.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 5,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Write Emails That Get Responses", "How to Influence People Without Authority"],
        },
        {
          title: "Finance & Fintech",
          courses: [
            "How to Invest in Capital Markets & Build a Portfolio",
            "How to Build Financial Models",
            "How to Invest in Fixed Income Securities",
          ],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How to Use Marketing Analytics to Optimize Conversion",
            "How to Decode Social Media Algorithms",
            "How to Do B2B Marketing",
            "How to Sell in Stores, Through D2C or Through Quick Commerce",
            "How to Market & Sell to the Bottom of the Pyramid",
          ],
        },
        {
          title: "Management & Strategy",
          courses: ["How to Use Game Theory for Business and Life", "How to Never Lose a Customer"],
        },
        {
          title: "Product & Tech",
          courses: [
            "How to Leverage Gamification and Behavioural Design to Build Successful Products",
            "How to Leverage Neuroscience in Business",
          ],
        },
        {
          title: "AI & ML",
          courses: ["How to Use Big Data to Drive Decision Making"],
        },
        {
          title: "Liberal Arts",
          courses: ["How American Politics Works", "Thinkers of The Modern World"],
        },
      ],
    },
    outClass: [
      {
        title: "Go-to-Market Challenge",
        description:
          "Design a game-changing go-to-market strategy that highlights the unique value of your product, ensures a seamless market entry, and delivers real value to your customers.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Data Science Hackathon",
        description:
          "Tackle murky data and tight deadlines to gather insights into a business problem and present a data-driven story to stakeholders.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 6,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Become a Better Leader"],
        },
        {
          title: "Finance & Fintech",
          courses: ["How do PE and VC Firms Work", "How M&A Works", "How to Invest in Exotic Financial Securities"],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How to Price Your Products Strategically",
            "How to Motivate & Incentivize Sales Teams",
            "How to Spark a Product-led Growth Using 'Nuclear' Theory",
            "How to Craft Compelling Copy to Maximize Sales",
            "How to Negotiate Deals That Create a Win-Win",
          ],
        },
        {
          title: "Management & Strategy",
          courses: [],
        },
        {
          title: "Product & Tech",
          courses: [
            "How to Use Mathematical Models for Business Optimization",
            "How to Use Power BI to Visualize Data",
            "How to Use Product Analytics for Deeper Insights",
            "How to A/B Test New Features?",
          ],
        },
        {
          title: "AI & ML",
          courses: [],
        },
        {
          title: "Liberal Arts",
          courses: ["How to Think Like a Philosopher", "How to Appreciate Art"],
        },
      ],
    },
    outClass: [
      {
        title: "The Product-Market-Fit Challenge",
        description:
          "Upgrade your product game, sharpen your offering, devise strategies to lower CAC, and prove why losing access to your product would leave customers truly disappointed.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Avishkar: EdTech Start Up Weekend",
        description:
          "Dive into a weekend-long challenge to tackle the biggest issues in the EdTech world and drive innovative solutions.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 7,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Hack Your Hormones"],
        },
        {
          title: "Finance & Fintech",
          courses: ["How IPOs work", "How to Innovate on Monetization Techniques", "How to Trade FOREX"],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How to Measure Brand Asset Value",
            "How to Fundraise Capital for Social Projects",
            "How to Position & Market Your Non-Profit Brand",
            "How to Set Up Drip Campaigns",
          ],
        },
        {
          title: "Management & Strategy",
          courses: [],
        },
        {
          title: "Product & Tech",
          courses: [
            "How to Protect Your Ideas Using Intellectual Property Law",
            "How the Renewable Energy Market Works",
            "How to Leverage Machine Learning to Build Business Solutions",
          ],
        },
        {
          title: "Liberal Arts",
          courses: ["Foreign Language - L1", "How the EU Works & Why Britain Exited"],
        },
      ],
    },
    outClass: [
      {
        title: "Raising-the-Seed-Fund Challenge",
        description:
          "Present your startup ideas to VCs in a typical Shark Tank manner to raise funding against equity.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "HackVerse: Metaverse Startup Weekend",
        description:
          "Engage with peers to bridge gaps, share ideas, and develop your best prototypes in under 48 hours.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    term: 8,
    inClass: {
      categories: [
        {
          title: "Communication & Self Development",
          courses: ["How to Master Power Writing & Deep Reading"],
        },
        {
          title: "Finance & Fintech",
          courses: [
            "How to Leverage DeFi and Crypto in Business",
            "How to Manage Risk and Optimize Returns",
            "How to Understand Taxes and Compliances",
          ],
        },
        {
          title: "Sales & Marketing",
          courses: [
            "How Can You Leverage AI & ML in Marketing",
            "How to Use Interactive Content to Get Better Conversions",
            "How to Leverage Design to Inspire Trust",
          ],
        },
        {
          title: "Management & Strategy",
          courses: ["How the Carbon Credits Economy Works"],
        },
        {
          title: "Product & Tech",
          courses: ["How to Build Hardware Prototypes"],
        },
        {
          title: "AI & ML",
          courses: [],
        },
        {
          title: "Liberal Arts",
          courses: [],
        },
      ],
    },
    outClass: [
      {
        title: "One-Day Profit Challenge",
        description:
          "Work with influencers to acquire, rebrand and upsell products from local artisans to create social impact, and make profits.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Agri-Tech Hackathon",
        description:
          "Join forces with peers to tackle pressing challenges in agriculture and ecotourism. Develop innovative tech solutions to transform these sectors and drive impactful change.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
]

export default function CSection2() {
  const [activeTerm, setActiveTerm] = useState(1)

  const currentTermData = courseData.find((term) => term.term === activeTerm) || courseData[0]

  return (
    <div className="bg-black text-white rounded-2xl min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Course Overview Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400">✦</span>
            <span className="uppercase text-gray-400 text-sm tracking-wider">COURSE OVERVIEW</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Master Concepts Inside</h1>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center">
            And{" "}
            <span className="relative mx-2">
              Outside <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400"></span>
            </span>{" "}
            the Classroom
          </h1>
        </div>

        {/* Term Selector */}
        <div className="bg-gray-900 rounded-full p-1 flex justify-between mb-8 overflow-x-auto">
          {courseData.map((term) => (
            <button
              key={term.term}
              onClick={() => setActiveTerm(term.term)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeTerm === term.term ? "text-black bg-yellow-400" : "text-gray-400"
              }`}
            >
              Term {term.term}
            </button>
          ))}
        </div>

        {/* In Class Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex-shrink-0"></div>
            <h2 className="text-xl font-bold flex items-center">
              In Class
              <span className="ml-2">
                <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 10C10 2 20 18 30 10C40 2 49 18 49 10"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentTermData.inClass.categories
                .filter((category) => category.courses.length > 0)
                .map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div
                      className={`inline-block px-3 py-1 rounded-md text-sm ${
                        category.title.includes("Communication")
                          ? "bg-cyan-950 text-cyan-400"
                          : category.title.includes("Finance")
                            ? "bg-cyan-950 text-cyan-400"
                            : category.title.includes("Sales")
                              ? "bg-green-950 text-green-400"
                              : category.title.includes("Management")
                                ? "bg-green-950 text-green-400"
                                : category.title.includes("Product")
                                  ? "bg-cyan-950 text-cyan-400"
                                  : category.title.includes("AI")
                                    ? "bg-cyan-950 text-cyan-400"
                                    : "bg-yellow-950 text-yellow-400"
                      }`}
                    >
                      {category.title}
                    </div>

                    <div className="space-y-3">
                      {category.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-start gap-2">
                          <span className="text-gray-400">•</span>
                          <p className="text-sm">{course}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Out Class Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex-shrink-0"></div>
            <h2 className="text-xl font-bold flex items-center">
              Out Class
              <span className="ml-2">
                <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 10C10 2 20 18 30 10C40 2 49 18 49 10"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTermData.outClass.map((challenge, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-800 bg-opacity-50 rounded-full p-2">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                  <p className="text-gray-400 text-sm">{challenge.description}</p>
                  {challenge.additionalText && (
                    <p className="text-yellow-400 text-sm mt-2">{challenge.additionalText}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4 flex items-center gap-2">
          <span className="text-gray-400 text-sm">📅</span>
          <p className="text-gray-800 text-sm">
            Each term for experienced professionals lasts 1-2 months and 2-3 months for freshers.
          </p>
        </div>
      </div>
    </div>
  )
}

