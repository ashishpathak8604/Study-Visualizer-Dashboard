import React from 'react';

const TabsHeader = ({ activeTab, onTabChange }) => {
  const tabs = ['Table View', 'Charts', 'Heatmap'];

  return (
    <div className="border-b border-gray-200 px-4">
      <nav className="flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-4 px-1 text-sm font-medium ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600 border-b-2'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabsHeader;
