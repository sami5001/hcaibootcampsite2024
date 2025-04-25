// Description: This file contains the AgendaItem component which is used to display an agenda item.
import React from 'react';

interface AgendaItemProps {
  time: string;
  event: string;
  type?: 'session' | 'break' | 'keynote';
}

export default function AgendaItem({ time, event, type = 'session' }: AgendaItemProps) {
  const getBgColor = () => {
    switch (type) {
      case 'break':
        return 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-700';
      case 'keynote':
        return 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700';
      default:
        return 'bg-white dark:bg-gray-900';
    }
  };
  
  return (
    <div className={`mb-4 p-4 rounded-lg shadow-sm ${getBgColor()} transition-all hover:shadow-md dark:shadow-gray-800`}>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="font-semibold text-gray-900 dark:text-white w-32">{time}</div>
        <div className="flex-1 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: event || '' }}></div>
      </div>
    </div>
  );
}