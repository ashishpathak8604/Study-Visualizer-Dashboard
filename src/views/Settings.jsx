// src/pages/Settings.jsx
import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="grid gap-4">
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-2">User Preferences</h2>
          <p className="text-gray-500 text-sm">Theme, notifications, etc. (Coming soon)</p>
        </div>
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-lg font-medium mb-2">Account Management</h2>
          <p className="text-gray-500 text-sm">Profile details, password reset, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
