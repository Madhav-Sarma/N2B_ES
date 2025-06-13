import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSettings, FiSun, FiMoon } from 'react-icons/fi';
import { TbCircleLetterC } from 'react-icons/tb';
import { SiCodeforces, SiCodechef, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { GiHorseHead } from 'react-icons/gi';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  const theme = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  const sidebarTheme = darkMode
    ? 'bg-dark border-end border-secondary'
    : 'bg-light border-end';
  const headerTheme = darkMode
    ? 'bg-dark border-bottom border-secondary'
    : 'bg-light border-bottom';

  const iconButtonStyle = {
    width: 50,
    height: 50,
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  };

  const getIconButtonStyle = (page) => {
    const current = location.pathname === '/' ? '/dashboard' : location.pathname;
    const isActive = current === `/${page}`;
    return {
      ...iconButtonStyle,
      backgroundColor: isActive
        ? darkMode ? '#495057' : '#e9ecef'
        : 'transparent',
      border: isActive
        ? `2px solid ${darkMode ? '#dee2e6' : '#495057'}`
        : '2px solid transparent',
      boxShadow: isActive
        ? darkMode
          ? '0 0 0 1px rgba(255,255,255,0.1)'
          : '0 0 0 1px rgba(0,0,0,0.1)'
        : 'none',
    };
  };

  const toggleButtonStyle = {
    width: 40,
    height: 40,
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

  return (
    <div className={`d-flex ${theme}`} style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <aside
        className={`d-flex flex-column align-items-center py-4 ${sidebarTheme}`}
        style={{ width: 80 }}
      >
        <div className="d-flex flex-column gap-3 mb-4">
          {platformIcons.map((pl, i) => (
            <button
              key={i}
              style={getIconButtonStyle(pl.page)}
              title={pl.name}
              onClick={() => navigate(`/${pl.page}`)}
              className={darkMode ? 'text-white' : 'text-dark'}
            >
              {pl.icon}
            </button>
          ))}
        </div>
        <div className="mt-auto">
          <button
            style={iconButtonStyle}
            title="Settings"
            className={darkMode ? 'text-white' : 'text-dark'}
          >
            <FiSettings size={24} />
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="d-flex flex-column flex-fill">
        {/* Header with toggle */}
        <header
          className={`d-flex align-items-center justify-content-between px-4 ${headerTheme}`}
          style={{ height: 70, flexShrink: 0 }}
        >
          <h4 className="mb-0 fw-bold">ExSo</h4>
          <button
            onClick={toggleTheme}
            style={toggleButtonStyle}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </header>

        {/* Only this scrolls */}
        <main className="flex-fill p-4" style={{ overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default NavBar;
