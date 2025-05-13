// src/pages/Studies.jsx
import React from "react";

const Studies = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">All Studies</h1>
      <div className="grid gap-4">
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-2">Study Filter & Search</h2>
          <p className="text-gray-500 text-sm">Search and filter studies here (To be implemented)</p>
        </div>
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-2">Study List</h2>
          <p className="text-gray-500 text-sm">Display all studies with statuses, tags, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Studies;
