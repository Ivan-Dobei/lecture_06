import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#565151',
        },
        text: {
            primary: '#000',
            secondary: '#ffffff',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#565151',
                }
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                columnHeader: {
                    color: '#fff',
                },
                root: {
                    color: '#fff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#616161',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#8c8c8c',
                        color: '#ffffff',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: '#b0b0b0',
                        color: '#7e7e7e',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black',
                },
            },
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#454',
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
    },
});