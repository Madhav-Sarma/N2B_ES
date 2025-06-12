import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSettings, FiSun, FiMoon } from 'react-icons/fi';
import { TbCircleLetterC } from 'react-icons/tb';
import { SiCodeforces, SiCodechef, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { GiHorseHead } from 'react-icons/gi';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MdHome } from "react-icons/md";


function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  const theme = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  const sidebarTheme = darkMode ? 'bg-dark border-end border-secondary' : 'bg-light border-end';
  const headerTheme = darkMode ? 'bg-dark border-bottom border-secondary' : 'bg-light border-bottom';

  const iconButtonStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  };

  const getIconButtonStyle = (page) => {
    const currentPath = location.pathname === '/' ? '/dashboard' : location.pathname;
    const isActive = currentPath === `/${page}`;
    
    return {
      ...iconButtonStyle,
      backgroundColor: isActive 
        ? (darkMode ? '#495057' : '#e9ecef')
        : 'transparent',
      border: isActive 
        ? `2px solid ${darkMode ? '#dee2e6' : '#495057'}`
        : '2px solid transparent',
      boxShadow: isActive 
        ? (darkMode ? '0 0 0 1px rgba(255,255,255,0.1)' : '0 0 0 1px rgba(0,0,0,0.1)')
        : 'none',
    };
  };

  const toggleButtonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#495057' : '#e9ecef',
    color: darkMode ? '#fff' : '#000',
  };

  const platformIcons = [
    { name: 'Home', icon: <MdHome size={24} />, page: 'dashboard' },
    { name: 'CodeChef', icon: <SiCodechef size={24} />, page: 'codechef' },
    { name: 'Codeforces', icon: <SiCodeforces size={24} />, page: 'codeforces' },
    { name: 'LeetCode', icon: <SiLeetcode size={24} />, page: 'leetcode' },
    { name: 'CSES', icon: <TbCircleLetterC size={24} />, page: 'cses' },
    { name: 'AtCoder', icon: <GiHorseHead size={24} />, page: 'atcoder' },
    { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks size={24} />, page: 'geeksforgeeks' },
  ];

  const handlePlatformClick = (platform) => {
    navigate(`/${platform.page}`);
  };

  return (
    <div className={`vh-100 vw-100 d-flex ${theme}`}>
      {/* Toggle Button */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <button
          onClick={toggleMode}
          style={toggleButtonStyle}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`h-100 d-flex flex-column align-items-center py-4 ${sidebarTheme}`} style={{ width: '80px' }}>
        <div className="d-flex flex-column gap-3 mb-4">
          {platformIcons.map((platform, index) => (
            <button
              key={index}
              className={`${darkMode ? 'text-white' : 'text-dark'}`}
              style={getIconButtonStyle(platform.page)}
              title={platform.name}
              onClick={() => handlePlatformClick(platform)}
            >
              {platform.icon}
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <button className={`${darkMode ? 'text-white' : 'text-dark'}`} style={iconButtonStyle} title="Settings">
            <FiSettings size={24} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-100 h-100 d-flex flex-column">
        <header className={`d-flex align-items-center px-4 ${headerTheme}`} style={{ height: '70px' }}>
          <h4 className="mb-0 fw-bold">ExSo</h4>
        </header>

        <main className="flex-fill p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default NavBar;