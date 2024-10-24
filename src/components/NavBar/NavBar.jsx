import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';


function Navbar() {
    const navBarItems = [
        { text: 'Home', path: '/' },
        { text: 'Heroes', path: '/heroes' },
        { text: 'About', path: '/about' },
    ];

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{ width: 500, position: 'fixed', top: '60px'}}
        >
            <List>
                {navBarItems.map((item, index) => (
                    <ListItem button key={index} component={Link} to={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Navbar