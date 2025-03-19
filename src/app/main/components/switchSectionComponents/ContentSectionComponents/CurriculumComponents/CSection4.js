import React from 'react';

const days = ['Mon 22', 'Tue 23', 'Wed 24', 'Thu 25', 'Fri 26', 'Sat 27', 'Sun 21'];
const hours = Array.from({ length: 13 }, (_, i) => `${9 + i} AM`);

const events = [
  { day: 0, time: '10 AM', title: 'Mid-Term Breakfast', type: 'blue', details: 'with Resident Faculty' },
  { day: 1, time: '11 AM', title: 'Consulting Club', type: 'blue', details: 'Workshop on Case Math' },
  { day: 2, time: '12 PM', title: 'How to Sell Without Selling', type: 'red', details: 'Mr. Vignesh Rao, VP, Zomato' },
  { day: 3, time: '1 PM', title: 'Mock Interview', type: 'yellow', details: 'Strategy Consulting Roles' },
  { day: 4, time: '2 PM', title: 'Networking Breakfast', type: 'blue', details: '' },
  { day: 5, time: '3 PM', title: 'Creator Challenge', type: 'orange', details: 'Building Your Brand on Social Media' },
  { day: 6, time: '4 PM', title: 'Venture Initiation Programme', type: 'orange', details: 'Demo Day' },
];

const getColor = (type) => {
  switch (type) {
    case 'blue': return 'bg-blue-100 text-blue-700';
    case 'red': return 'bg-red-100 text-red-700';
    case 'yellow': return 'bg-yellow-100 text-yellow-700';
    case 'orange': return 'bg-orange-100 text-orange-700';
    default: return 'bg-gray-100';
  }
};

const CSection4 = () => {
  return (
    <div className="p-6 bg-black rounded-2xl text-white">
      <h2 className="text-3xl font-bold mb-4">A Glimpse Into Your Weekly Schedule</h2>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-8 min-w-[1200px]">
          <div className="bg-gray-800 text-gray-400"></div>
          {days.map((day, idx) => (
            <div key={idx} className="p-4 font-bold text-center border-b border-gray-700">{day}</div>
          ))}
          {hours.map((hour, hourIdx) => (
            <React.Fragment key={hourIdx}>
              <div className="p-2 text-gray-400 border-r border-gray-700">{hour}</div>
              {days.map((_, dayIdx) => (
                <div key={`${dayIdx}-${hourIdx}`} className="relative h-20 border-r border-b border-gray-700">
                  {events.map((event, eventIdx) => (
                    event.day === dayIdx && event.time === hour ? (
                      <div key={eventIdx} className={`absolute inset-1 p-2 rounded-lg ${getColor(event.type)}`}>
                        <strong>{event.title}</strong>
                        <p className="text-xs">{event.details}</p>
                      </div>
                    ) : null
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSection4;
