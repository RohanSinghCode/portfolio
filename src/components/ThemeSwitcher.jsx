import React, { useState } from 'react';
import useDarkSide from '../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher({className}) {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(checked ? 'dark' : 'light');
    setDarkSide(checked);
  };

  return (
    <>
      <div className={`${className}`}>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={46} />
      </div>
    </>
  );
}