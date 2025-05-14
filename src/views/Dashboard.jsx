import React, { useState } from 'react';
import DashboardCards from '../components/DashboardCards';
import TabsHeader from '../components/TabsHeader';
import StudyTable from '../components/StudyTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Table View');

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <main className="p-6 space-y-6">
        <DashboardCards />
        <TabsHeader activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'Table View' && <StudyTable />}
        {activeTab === 'Charts' && (
          <div className="p-4 bg-white rounded shadow">[Charts Placeholder]</div>
        )}
        {activeTab === 'Heatmap' && (
          <div className="p-4 bg-white rounded shadow">[Heatmap Placeholder]</div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
