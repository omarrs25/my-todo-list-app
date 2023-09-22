import React, { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newColorScheme);
    localStorage.setItem('colorScheme', newColorScheme);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;
