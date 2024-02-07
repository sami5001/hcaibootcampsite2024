import React from 'react';
import './globals.css'; // Import global styles
//
//
const AgendaItem = ({ time, event }) => {
  return (
    <tr>
      <td className="px-4 py-2">{time}</td>
      <td className="px-4 py-2">{event}</td>
    </tr>
  );
};

const Agenda = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Event</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <AgendaItem key={index} time={item.time} event={item.event} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const agendaData = [
    { time: '9:00 am', event: 'Tea/Coffee' },
    { time: '9:30 am', event: 'Session 1' },
    { time: '10:15 am', event: 'Session 2' },
    { time: '11:00 am', event: 'Tea/Coffee Break' },
    { time: '11:30 am', event: 'Session 3' },
    { time: '12:15 pm', event: 'Session 4' },
    { time: '12:30 pm', event: 'Lunch Break' },
    { time: '1:30 pm', event: 'Session 17' },
    { time: '2:15 pm', event: 'Session 18' },
    { time: '3:00 pm', event: 'Session 19' },
    { time: '3:30 pm', event: 'Tea/Coffee Break' },
    { time: '4:00 pm', event: 'Session 20 (Keynote)' },
    { time: '4:45 pm', event: 'Feedback Session' },
    { time: '5:00 pm', event: 'End of Day' },
    { time: '6:30 pm', event: 'Drinks Reception (Optional)' },
    { time: '7:00 pm', event: 'Formal Dinner (Formal Dress Code)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-white to-white dark:from-black dark:via-black dark:to-black">
      <Agenda data={agendaData} />
    </div>
  );
};

export default App;