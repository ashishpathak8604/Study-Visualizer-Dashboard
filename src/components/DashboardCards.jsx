import React from 'react';

const cards = [
  {
    title: 'Total Studies',
    value: '324',
    growth: '+12%',
    chartColor: 'bg-blue-100',
  },
  {
    title: 'Active Studies',
    value: '156',
    growth: '+12%',
    chartColor: 'bg-green-100',
  },
  {
    title: 'Clinical Trials',
    value: 'Used in 45 studies',
    subtitle: 'Most Used Tag',
    icon: '🏷️',
  },
  {
    title: 'Last Updated',
    value: '2 hours ago',
    subtitle: 'By John Doe',
    icon: '⏰',
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow border border-gray-100 flex flex-col justify-between h-40 p-5
            transform transition-transform duration-200 hover:-translate-y-2"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-gray-500 font-medium mb-2">{card.title}</div>
            </div>
            {card.icon && (
              <div className="text-2xl text-gray-400">{card.icon}</div>
            )}
          </div>
          <div className="flex items-end justify-between flex-1">
            <div>
              <div className="text-3xl font-bold text-gray-900">{card.value}</div>
              {card.subtitle && (
                <div className="text-xs text-gray-400 mt-1">{card.subtitle}</div>
              )}
            </div>
            {/* Chart/Growth badge */}
            {(card.growth || card.chartColor) && (
              <div className={`ml-2 flex items-center ${card.chartColor} rounded-lg px-2 py-1`}>
                {card.growth && (
                  <span className="text-xs font-semibold text-green-600">{card.growth}</span>
                )}
                {/* Placeholder for chart */}
                {!card.growth && (
                  <div className="w-10 h-4 bg-gray-200 rounded"></div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
