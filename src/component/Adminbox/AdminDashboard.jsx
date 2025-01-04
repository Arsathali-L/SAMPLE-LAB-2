import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StudentData from './StudentData';
import AdminProfile from './AdminProfile';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('studentData');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'studentData':
        return <StudentData />;
      case 'adminProfile':
        return <AdminProfile />;
      default:
        return <div>Welcome to Admin Dashboard</div>;
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

export default AdminDashboard;