// src/pages/Charts.jsx
import React from "react";

const Charts = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Study Charts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-2">Participants by Status</h2>
          <p className="text-gray-500 text-sm">Pie/Bar chart goes here</p>
        </div>
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-2">Monthly Enrollments</h2>
          <p className="text-gray-500 text-sm">Line chart or area chart goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Charts;
