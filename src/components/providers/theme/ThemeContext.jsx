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

    return (
        <ThemeContext.Provider value={{
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


