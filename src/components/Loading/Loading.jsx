import React from 'react';
import {Typography} from "@mui/material";

function Loading() {
    return (
        <Typography color={'text.secondary'} sx={{width: '100%', fontSize: '32px', textAlign: 'center'}}>
            Loading...
        </Typography>
    );
}

export default Loading;