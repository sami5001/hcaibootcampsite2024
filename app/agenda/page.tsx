import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Type definitions
interface AgendaItem {
  time: string;
  event: string;
  type: string;
  details?: string;
  speaker?: string;
}

interface DaySchedule {
  day: string;
  date: string;
  location: string;
  items: AgendaItem[];
}

interface DailyFocus {
  name: string;
  theme: string;
  items: string[];
  quote: string;
}

interface AgendaSchedule {
  title: string;
  description: string;
  note: string;
  items: DaySchedule[];
}

interface BootcampStructure {
  title: string;
  description: string;
  days: DailyFocus[];
}

// Components remain the same
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
    case 'lecture':
      bgColor = 'bg-green-50 dark:bg-green-900/20';
      textColor = 'text-green-700 dark:text-green-300';
      break;
    case 'training':
      bgColor = 'bg-purple-50 dark:bg-purple-900/20';
      textColor = 'text-purple-700 dark:text-purple-300';
      break;
    case 'social':
      bgColor = 'bg-amber-50 dark:bg-amber-900/20';
      textColor = 'text-amber-700 dark:text-amber-300';
      break;
    default:
      bgColor = 'bg-white dark:bg-gray-900';
      textColor = 'text-gray-800 dark:text-gray-200';
  }
  
  return (
    <tr className={`${bgColor} border-b border-gray-200 dark:border-gray-700 transition-colors`}>
      <td className={`px-4 py-3 ${textColor} text-sm sm:text-base font-medium`}>{item.time}</td>
      <td className={`px-4 py-3 ${textColor} text-sm sm:text-base`}>
        <div className="font-semibold">{item.event}</div>
        {item.details && <div className="text-sm mt-1 opacity-80">{item.details}</div>}
        {item.speaker && <div className="text-xs mt-1 italic">{item.speaker}</div>}
      </td>
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

// Function to read content files
async function getAgendaContent() {
  const contentDir = path.join(process.cwd(), 'app/content/agenda');
  
  // Read daily focus content
  const dailyFocusPath = path.join(contentDir, 'daily-focus.md');
  const dailyFocusContent = fs.readFileSync(dailyFocusPath, 'utf8');
  const dailyFocusData = matter(dailyFocusContent);
  
  // Read schedule content
  const schedulePath = path.join(contentDir, 'schedule.md');
  const scheduleContent = fs.readFileSync(schedulePath, 'utf8');
  const scheduleData = matter(scheduleContent);
  
  return {
    dailyFocus: dailyFocusData.data as BootcampStructure,
    schedule: scheduleData.data as AgendaSchedule
  };
}

export default async function Agenda() {
  // Load data from content files
  const { dailyFocus, schedule } = await getAgendaContent();
  
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Bootcamp Agenda</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {dailyFocus.description}
          </p>
        </div>
      </section>

      {/* Daily Focus Section */}
      <section className="w-full bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-4">{dailyFocus.title}</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyFocus.days.map((day, index) => (
              <DayCard key={index} day={day} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-4">{schedule.title}</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12"></div>
          
          {schedule.note && (
            <p className="text-center mb-8 text-blue-700 dark:text-blue-300 max-w-3xl mx-auto">
              {schedule.note}
            </p>
          )}
          
          {/* Render each day's schedule */}
          {schedule.items.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12">
              <div className="bg-blue-600 dark:bg-blue-800 rounded-t-lg p-4">
                <h3 className="text-xl font-bold text-white">{day.day} - {day.date}</h3>
                <p className="text-blue-100 text-sm">{day.location}</p>
              </div>
              
              <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-b-lg shadow mb-8">
                <table className="min-w-full">
                  <thead className="bg-blue-50 dark:bg-blue-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider w-1/4">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {day.items.map((item, itemIndex) => (
                      <AgendaItemComponent key={itemIndex} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          
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