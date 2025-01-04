import React from 'react';

const Sidebar = ({ activePage, setActivePage, toggleDarkMode, darkMode }) => {
  return (
    <div className="w-64 bg-blue-500 text-white flex flex-col">
      <div className="p-4 font-bold text-lg text-center">Student Dashboard</div>
      <nav className="flex flex-col gap-4 mt-6 p-4">
        <button
          onClick={() => setActivePage('studentProfile')}
          className={`w-full text-left px-4 py-2 rounded-md hover:bg-blue-600 ${
            activePage === 'studentProfile' ? 'bg-blue-600' : ''
          }`}
        >
          Student Profile
        </button>
        <button
          onClick={() => setActivePage('meal')}
          className={`w-full text-left px-4 py-2 rounded-md hover:bg-blue-600 ${
            activePage === 'meal' ? 'bg-blue-600' : ''
          }`}
        >
          Meal
        </button>
        <button
          onClick={() => setActivePage('roomDetail')}
          className={`w-full text-left px-4 py-2 rounded-md hover:bg-blue-600 ${
            activePage === 'roomDetail' ? 'bg-blue-600' : ''
          }`}
        >
          Room Detail
        </button>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="mt-auto mx-4 py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Sidebar;
