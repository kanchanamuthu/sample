import {useEffect,useState} from "react";
import React from "react";
import './Theme.scss';
import ReactSwitch from 'react-switch';


const Themes = () => {
    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(false);

   
    const setMode = mode => {
      window.localStorage.setItem('theme', mode)
      setTheme(mode)
  };

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme)
      document.body.className = theme;
   }, [theme]);

    const handleChange = val => {
        setChecked(val)
        if (theme === 'light') {
            setMode('dark');
            } else {
            setMode('light');
            }
      };

    


    return (
    <div className={`App ${theme}`}>
      <ReactSwitch checked = {checked} onChange={handleChange} className="switch-style"/>
    </div>
    
   );
  
}

export default Themes;