// /app/activities/page.tsx
import Image from 'next/image';
import { getYamlData } from '@/lib/yaml';

export default function Activities() {
  // This would ideally come from a YAML file
  const activitiesData = {
    days: [
      {
        name: "Day 1: Mapping",
        theme: "What is there now?",
        description: "Introduction to Human-Centred AI and practices of Design Innovation methods.",
        activities: [
          "Problem Identification",
          "Team Formation",
          "Landscape Mapping"
        ]
      },
      {
        name: "Day 2: Educing",
        theme: "What works and what does not work?",
        description: "Working with Dimensions of Engagement. Find what's missing with Deep Reasoning Questions (DRQs) and Generative Design Questions (GDQs).",
        activities: [
          "Systems Analysis",
          "Stakeholder Mapping",
          "Critical Thinking"
        ]
      },
      {
        name: "Day 3: Disrupting",
        theme: "What happens if…?",
        description: "Co-creating, co-designing and defining potential solutions.",
        activities: [
          "Ideation",
          "Co-creation",
          "Solution Design"
        ]
      },
      {
        name: "Day 4: Gestalting",
        theme: "It is kind of like this…",
        description: "Prototyping with Preto-Vids and team presentations.",
        activities: [
          "Prototyping",
          "Visualization",
          "Presentation"
        ]
      },
      {
        name: "Day 5: Implementing",
        theme: "This is how it should be.",
        description: "Implementation sprint and final team presentations.",
        activities: [
          "Implementation",
          "Pitch Development",
          "Future Planning"
        ]
      }
    ],
    highlights: [
      {
        title: "Design Innovation",
        description: "Participants work in groups to identify, design, and prototype digital health solutions for Multiple Long-Term Conditions.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
      },
      {
        title: "Domain Experts",
        description: "Access to healthcare professionals, digital health designers, AI experts, and patients who collaborate throughout the process.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      },
      {
        title: "Rapid Lectures",
        description: "Lectures for beginners and pros on HcAI and digital health AI/ML topics that are relevant to healthcare.",
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
      },
      {
        title: "Hands-on Exercises",
        description: "Hands-on HcAI design exercises to apply to your own projects or what your team has identified.",
        image: "https://images.unsplash.com/photo-1576595580361-90a855b84b20"
      },
      {
        title: "Team Presentations",
        description: "Team presentations and plenary sessions for feedback, and to discuss potential approaches to solutions.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
      },
      {
        title: "Advanced Prototyping",
        description: "Create prototypes with help of IT experts for pitch-ready digital health solutions for review by our entrepreneur in residence.",
        image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
      }
    ],
    teams: [
      {
        name: "Team 1: Health Literacy",
        description: "Health Literacy and Health Management powered by LLMs",
        details: "The team identified several themes that they wanted to work with, and narrowed down the scope using design innovation methods. They prototyped a solution based on patient needs, creating an app design leveraging LLMs."
      },
      {
        name: "Team 2: PILLAR",
        description: "Precision dosing, personalized care for kidney health",
        details: "The team leveraged their experience as healthcare experts and beneficiaries to identify need in precision dosing. Their innovation was achieved by disrupting across the dimensions of engagement – a method they trained in at the bootcamp."
      },
      {
        name: "Team 3: Automated Summaries",
        description: "Automated Patient Visitation Summary",
        details: "Team 3 developed a system that automates visitation summaries for both practitioners and patients. Each party is served with contextual and customized summaries, powered by multiple AI/ML tools, including LLMs."
      }
    ]
  };
  
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Bootcamp Activities</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From design thinking to prototyping, our comprehensive program develops your skills in Human-Centered AI
          </p>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our 5-Day Immersive Experience</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The bootcamp follows a structured approach that takes you from problem identification to prototype development
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {activitiesData.days.map((day, index) => (
              <div key={index} className="relative mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold z-10">{index + 1}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{day.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{day.theme}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {day.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {day.activities.map((activity, idx) => (
                      <span key={idx} className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">{activity}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Activity Cards Section */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Activity Highlights</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our bootcamp features a variety of hands-on activities designed to build your skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesData.highlights.map((highlight, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Previous Bootcamp Results */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Previous Bootcamp Results</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what teams created during our previous bootcamp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activitiesData.teams.map((team, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{team.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {team.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {team.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Next Bootcamp?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience these activities and more at our upcoming Human-Centered Medical AI Design Bootcamp
          </p>
          <a 
            href="https://forms.office.com/e/HukNaP5vQ6"
            className="bg-white text-blue-600 dark:bg-blue-800 dark:text-white rounded-full px-8 py-3 text-lg font-medium inline-block transition-all hover:bg-blue-50 dark:hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Interest
          </a>
        </div>
      </section>
    </main>
  )
}