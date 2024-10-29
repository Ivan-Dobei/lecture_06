import React, {useContext} from 'react';
import Box from "@mui/material/Box";
import {ThemeContext} from "../../theme/ThemeContext/ThemeContext";

function ThemeBox({children}) {

    const {isDarkTheme} = useContext(ThemeContext);

    return (
        <Box sx={{
            backgroundColor: isDarkTheme ? '#000' : '#fff',
            padding: '0',
            margin: '0',
            color: 'inherit',
            boxShadow: 'none',
            border: 'none',
            height: '100vh'
        }}>
            {children}
        </Box>
    );
}

export default ThemeBox;