import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [lang, setLang] = useState("en");

    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(()=>{
        console.log('theme switched')
    },[theme])

    const colors = [
        "--primary-background",
        "--secondary-background",
        "--terciary-background",
        "--text-primary",
        "--text-secondary",
        "--pastel-blue",
        "--pastel-red",
        "--pastel-green",
        "--pastel-orange",
        "--pastel-purple",
        "--pastel-lime"
      ];
      

    return (
        <ThemeContext.Provider value={{
            colors: colors,
            theme,
            toggleTheme: toggleTheme,
            lang,
            setLang:setLang,
        }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);


