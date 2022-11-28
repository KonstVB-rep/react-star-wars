import React, {useContext, useEffect, useState} from "react";
import { changeCssVariables } from "../services/changeCssVariables";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEUTRAL = "neutral";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme')
    if(themeStorage){
      setTheme(themeStorage);
      changeCssVariables(themeStorage);
    }
  },[])

  const change = (name) => {
    setTheme(name);
    localStorage.setItem('theme', name);
    changeCssVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
