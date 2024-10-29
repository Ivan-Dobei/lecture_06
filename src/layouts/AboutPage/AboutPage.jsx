import React from 'react';
import {Card, Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function AboutPage() {
    return (
        <Box>
            <Paper display="flex" justifyContent="center" sx={{height: '60px', marginBottom: '100px'}}>
                <Typography color={'text.secondary'} variant="h3" textAlign={'center'}>
                    About Page
                </Typography>
            </Paper>

            <Typography color={'text.secondary'} variant='h4' textAlign='center'>
                In Progress...
            </Typography>
        </Box>
    );
}

export default AboutPage;