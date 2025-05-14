import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard Overview</h1>
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search studies, tags..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-100 focus:bg-white focus:border-blue-400 focus:outline-none transition-all duration-200 w-48 focus:w-64"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-sm pointer-events-none" />
        </div>
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaBell className="text-gray-500 text-lg" />
          {/* Notification dot */}
          <span className="absolute top-2 right-2 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        {/* Profile */}
        <div className="flex items-center space-x-2 hover:bg-gray-100 px-2 py-1 rounded-lg transition">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-9 h-9 rounded-full border border-gray-200"
          />
          <span className="font-medium text-gray-900">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
