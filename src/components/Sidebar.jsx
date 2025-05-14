import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaTable, FaCalendar, FaCog } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';

const menuItems = [
  { label: 'Dashboard', icon: <HiOutlineViewGrid size={20} />, path: '/' },
  { label: 'Studies', icon: <FaTable size={18} />, path: '/studies' },
  { label: 'Charts', icon: <FaChartBar size={18} />, path: '/charts' },
  { label: 'Heatmaps', icon: <FaCalendar size={18} />, path: '/heatmaps' },
  { label: 'Settings', icon: <FaCog size={18} />, path: '/settings' },
];

const Sidebar = () => (
  <aside className="h-screen w-60 bg-white border-r border-gray-100 shadow-sm flex flex-col px-4 py-6">
    {/* Logo/Brand */}
    <div className="flex items-center mb-8">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 font-bold text-2xl mr-2">
        <HiOutlineViewGrid size={28} />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-gray-900">StudyViz</span>
    </div>
    <hr className="mb-6 border-gray-100" />

    {/* Navigation */}
    <nav className="flex flex-col gap-2">
      {menuItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 group
            ${isActive
              ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-500 shadow-sm'
              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500'
            }`
          }
        >
          <span
            className={`transition-colors duration-150 ${
              window.location.pathname === item.path ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'
            }`}
          >
            {item.icon}
          </span>
          <span className="truncate">{item.label}</span>
        </NavLink>
      ))}
    </nav>

    {/* Optional: Profile/Logout at bottom */}
    {/* <div className="mt-auto pt-8">
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-red-500 transition">
        <FaSignOutAlt size={16} />
        <span>Logout</span>
      </button>
    </div> */}
  </aside>
);

export default Sidebar;
