// src/pages/Studies.jsx
import React, { useState } from "react";
import StudyTable from "../components/StudyTable";

const Studies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">All Studies</h1>

      <div className="grid gap-6">
        {/* Search & Filter Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium mb-4">Search & Filter</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search studies by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Future filter controls (dropdowns/toggles) can go here */}
          </div>
        </div>

        {/* Study Table */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium mb-4">Study List</h2>
          <StudyTable searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Studies;
