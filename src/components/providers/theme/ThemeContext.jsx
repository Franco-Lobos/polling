import { createContext, useContext, useEffect, useState } from "react";
import { ColorsConst, BreathColors} from "../../constants/ColorsConst";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [lang, setLang] = useState("en");

    const [loaded, setLoad] = useState(0);

    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }

    // useEffect(()=>{
    //     console.log('theme switched')
    // },[theme])

    const colors = [
        "--primary-background",
        "--secondary-background",
        "--terciary-background",
        "--text-primary",
        "--text-secondary",
        "--text-terciary",
        "--pastel-blue",
        "--pastel-red",
        "--pastel-green",
        "--pastel-orange",
        "--pastel-purple",
        "--pastel-lime"
      ];


      useEffect(()=>{
        Object.keys(ColorsConst).map(colorKey=>{
            document.documentElement.style.setProperty(`${colorKey}`, ColorsConst[colorKey][theme])
        })

    },[theme])
      

    return (
        <ThemeContext.Provider value={{
            colors,
            BreathColors,
            theme,
            toggleTheme: toggleTheme,
            lang,
            setLang:setLang,
            loaded,
            setLoad: setLoad,
        }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);


