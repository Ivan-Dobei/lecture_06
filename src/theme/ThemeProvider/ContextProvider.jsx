import React, {useState} from 'react';
import {THEME_KEY, ThemeContext} from "../ThemeContext/ThemeContext";
import {strToBool} from "../../utils/strToBool";
import {ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "../themes/themes";

function ContextProvider({children}) {

    const defaultThemeValue = strToBool(localStorage.getItem(THEME_KEY));
    const [isDarkTheme, setIsDarkTheme] = useState(defaultThemeValue);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem(THEME_KEY, JSON.stringify(!isDarkTheme));
    }

    return (
        <ThemeContext.Provider value={{
            isDarkTheme,
            toggleTheme
        }}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ContextProvider;