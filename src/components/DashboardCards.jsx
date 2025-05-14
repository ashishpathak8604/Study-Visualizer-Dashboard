import React from 'react';

const DashboardCards = ({ studies = [] }) => {
  // Total studies
  const totalStudies = studies.length;

  // Active studies (status: active or ongoing)
  const activeStudies = studies.filter(
    (s) => s.status?.toLowerCase() === 'active' || s.status?.toLowerCase() === 'ongoing'
  ).length;

  // Most used tag
  const tagFrequency = {};
  studies.forEach((study) => {
    (study.tags || []).forEach((tag) => {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    });
  });
  const mostUsedTag = Object.entries(tagFrequency).sort((a, b) => b[1] - a[1])[0];

  // Last updated study
  const sorted = [...studies].sort(
    (a, b) => new Date(b.updated_at || b.created_at) - new Date(a.updated_at || a.created_at)
  );
  const lastUpdated = sorted[0];

  const cards = [
    {
      title: 'Total Studies',
      value: totalStudies,
      growth: '+12%',
      chartColor: 'bg-blue-100',
    },
    {
      title: 'Active Studies',
      value: activeStudies,
      growth: '+12%',
      chartColor: 'bg-green-100',
    },
    {
      title: 'Most Used Tag',
      value: mostUsedTag ? `Used in ${mostUsedTag[1]} studies` : '—',
      subtitle: mostUsedTag ? mostUsedTag[0] : '—',
      icon: '🏷️',
    },
    {
      title: 'Last Updated',
      value: lastUpdated
        ? new Date(lastUpdated.updated_at || lastUpdated.created_at).toLocaleString()
        : '—',
      subtitle: lastUpdated?.created_by || '—',
      icon: '⏰',
    },
  ];

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
            {(card.growth || card.chartColor) && (
              <div className={`ml-2 flex items-center ${card.chartColor} rounded-lg px-2 py-1`}>
                {card.growth && (
                  <span className="text-xs font-semibold text-green-600">{card.growth}</span>
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
