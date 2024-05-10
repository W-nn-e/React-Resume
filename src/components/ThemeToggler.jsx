import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store';
import './ThemeToggler.css';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';

  const handleToggler = () => {
    dispatch(toggleTheme());
  };

  document.documentElement.className = themeClass;

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={handleToggler} defaultChecked={theme === 'dark'} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
