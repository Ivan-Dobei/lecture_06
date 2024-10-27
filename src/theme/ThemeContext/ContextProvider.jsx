import React, {useState} from 'react';
import {THEME_KEY, ThemeContext} from "./ThemeContext";
import {strToBool} from "../../utils/strToBool";
import {createTheme, ThemeProvider} from "@mui/material";

function ContextProvider({children}) {

    const defaultThemeValue = strToBool(localStorage.getItem(THEME_KEY));
    const [isDarkTheme, setIsDarkTheme] = useState(defaultThemeValue);

    console.log(defaultThemeValue);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#434444',
            },
            background: {
                default: '#565151',
            },
            text: {
                primary: '#ffffff',
                secondary: '#b0bec5',
            },
        },
        components: {
            MuiBox: {
              styleOverrides: {
                  root: {
                      backgroundColor: '#565151',
                  }
              }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '8px',
                        backgroundColor: '#0359f8',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#616161',
                        },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: '#ffffff',
                    },
                },
            },
        },
    });

// Light theme
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#1976d2',
            },
            background: {
                default: '#ffffff',
            },
            text: {
                primary: '#000000',
                secondary: '#757575',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '8px',
                        backgroundColor: '#e0e0e0',
                        color: '#000000',
                        '&:hover': {
                            backgroundColor: '#bdbdbd',
                        },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: '#000000',
                    },
                },
            },
        },
    });

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