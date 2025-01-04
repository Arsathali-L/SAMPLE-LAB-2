import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StudentProfile from './StudentProfile';
import Meal from './Meal';
import RoomDetail from './RoomDetail';

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState('studentProfile');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'studentProfile':
        return <StudentProfile />;
      case 'meal':
        return <Meal />;
      case 'roomDetail':
        return <RoomDetail />;
      default:
        return <div>Welcome to Student Dashboard</div>;
    }
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
      <div className="flex min-h-screen">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <div className="flex-1 p-8">{renderPageContent()}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
