import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages
import Dashboard from './views/Dashboard';
import Studies from './views/Studies';
import Charts from './views/Charts';
import Heatmaps from './views/Heatmaps';
import Settings from './views/Settings';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/heatmaps" element={<Heatmaps />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
