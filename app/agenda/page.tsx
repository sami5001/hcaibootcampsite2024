import React from 'react';

// Type definitions
interface AgendaItem {
  time: string;
  event: string;
  type: 'break' | 'session' | 'keynote';
}

interface DailyFocus {
  name: string;
  theme: string;
  items: string[];
  quote: string;
}

const AgendaItemComponent: React.FC<{ item: AgendaItem }> = ({ item }) => {
  let bgColor;
  let textColor;
  
  switch (item.type) {
    case 'break':
      bgColor = 'bg-blue-100 dark:bg-blue-900/40';
      textColor = 'text-blue-800 dark:text-blue-200';
      break;
    case 'keynote':
      bgColor = 'bg-blue-50 dark:bg-blue-900/20';
      textColor = 'text-blue-700 dark:text-blue-300';
      break;
    default:
      bgColor = 'bg-white dark:bg-gray-900';
      textColor = 'text-gray-800 dark:text-gray-200';
  }
  
  return (
    <tr className={`${bgColor} border-b border-gray-200 dark:border-gray-700 transition-colors`}>
      <td className={`px-4 py-3 ${textColor} text-sm sm:text-base font-medium`}>{item.time}</td>
      <td className={`px-4 py-3 ${textColor} text-sm sm:text-base`} dangerouslySetInnerHTML={{ __html: item.event || '' }}></td>
    </tr>
  );
};

const DayCard: React.FC<{ day: DailyFocus; index: number }> = ({ day, index }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 p-4">
        <h3 className="text-xl font-bold text-white">{day.name}</h3>
        <p className="text-blue-100 dark:text-blue-200 italic">{day.theme}</p>
      </div>
      <div className="p-6">
        <ul className="list-disc pl-5 space-y-2 mb-6">
          {day.items.map((item, idx) => (
            <li key={idx} className="text-blue-900 dark:text-blue-100" dangerouslySetInnerHTML={{ __html: item || '' }}></li>
          ))}
        </ul>
        <blockquote className="border-l-4 border-blue-500 dark:border-blue-700 pl-4 italic text-blue-700 dark:text-blue-300" dangerouslySetInnerHTML={{ __html: day.quote || '' }}>
        </blockquote>
      </div>
    </div>
  );
};

export default function Agenda() {
  // This would ideally come from a YAML file
  const agendaData: AgendaItem[] = [
    { time: '9:00 am', event: 'Tea/Coffee', type: 'break' },
    { time: '9:30 am', event: 'Session 1', type: 'session' },
    { time: '10:15 am', event: 'Session 2', type: 'session' },
    { time: '11:00 am', event: 'Tea/Coffee Break', type: 'break' },
    { time: '11:30 am', event: 'Session 3', type: 'session' },
    { time: '12:15 pm', event: 'Session 4', type: 'session' },
    { time: '12:30 pm', event: 'Lunch Break', type: 'break' },
    { time: '1:30 pm', event: 'Session 5', type: 'session' },
    { time: '2:15 pm', event: 'Session 6', type: 'session' },
    { time: '3:00 pm', event: 'Session 7', type: 'session' },
    { time: '3:30 pm', event: 'Tea/Coffee Break', type: 'break' },
    { time: '4:00 pm', event: 'Session 8 (Keynote on Day 3)', type: 'keynote' },
    { time: '4:45 pm', event: 'Feedback Session', type: 'session' },
    { time: '5:00 pm', event: 'End of Day', type: 'break' },
    { time: '6:30 pm', event: 'Drinks Reception (Day 5 Only, Optional)', type: 'break' },
    { time: '7:00 pm', event: 'Formal Dinner (Day 5 Only, Formal Dress Code)', type: 'keynote' },
  ];

  const dailyFocus: DailyFocus[] = [
    {
      name: "Day 1: Mapping",
      theme: "What is there now?",
      items: [
        "Introduction to Human-Centered AI principles",
        "Formation of design teams",
        "Selection of case studies",
        "Problem landscape mapping exercises",
        "Understanding stakeholder needs"
      ],
      quote: "Begin by understanding the current landscape before creating new solutions."
    },
    {
      name: "Day 2: Educing",
      theme: "What works and what doesn't?",
      items: [
        "Analyzing existing solutions",
        "Identifying pain points and opportunities",
        "Deep Reasoning Questions (DRQs)",
        "Generative Design Questions (GDQs)",
        "Dimensions of Engagement framework"
      ],
      quote: "Critical analysis of current approaches reveals opportunities for innovation."
    },
    {
      name: "Day 3: Disrupting",
      theme: "What happens if...?",
      items: [
        "Co-creation workshops",
        "Ideation techniques",
        "Solution exploration",
        "Keynote presentation",
        "Feedback and iteration"
      ],
      quote: "Challenging assumptions leads to breakthrough innovations."
    },
    {
      name: "Day 4: Gestalting",
      theme: "It is kind of like this...",
      items: [
        "Prototyping techniques",
        "Preto-Vids development",
        "Visual storytelling",
        "Solution visualization",
        "Preparation for presentations"
      ],
      quote: "Bringing ideas to life through prototyping helps refine and communicate concepts."
    },
    {
      name: "Day 5: Implementing",
      theme: "This is how it should be.",
      items: [
        "Implementation planning",
        "Final refinements",
        "Team presentations",
        "Expert feedback",
        "Celebration dinner"
      ],
      quote: "Creating practical implementation plans transforms concepts into reality."
    }
  ];

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Bootcamp Agenda</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive 5-day program designed to develop your skills in Human-Centered Medical AI
          </p>
        </div>
      </section>

      {/* Daily Focus Section */}
      <section className="w-full bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-4">5-Day Bootcamp Structure</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyFocus.map((day, index) => (
              <DayCard key={index} day={day} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-4">Daily Schedule</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12"></div>
          <p className="text-center mb-8 text-blue-700 dark:text-blue-300 max-w-3xl mx-auto">
            Each day follows a similar schedule with specific content tailored to that day&apos;s focus area. 
            The keynote presentation occurs on Day 3, and the formal dinner is held on the final day.
          </p>
          
          <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-blue-50 dark:bg-blue-900/30">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {agendaData.map((item, index) => (
                  <AgendaItemComponent key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              * Schedule subject to minor adjustments
            </p>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Us for the Bootcamp</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            March 25-29, 2024 at the University of Oxford
          </p>
          <a 
            href="https://forms.office.com/e/HukNaP5vQ6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 dark:bg-blue-800 dark:text-white font-medium rounded-full hover:bg-blue-50 dark:hover:bg-blue-700 transition duration-300"
          >
            Register Your Interest
          </a>
        </div>
      </section>
    </main>
  );
}