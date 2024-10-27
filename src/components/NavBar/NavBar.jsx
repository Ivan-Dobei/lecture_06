import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Drawer, List, ListItem, ListItemText, Switch, Typography} from '@mui/material';
import {ThemeContext} from "../../theme/ThemeContext/ThemeContext";

function Navbar() {

    const {isDarkTheme, toggleTheme} = useContext(ThemeContext)

    const navBarItems = [
        { text: 'Home', path: '/' },
        { text: 'Heroes', path: '/heroes' },
        { text: 'About', path: '/about' },
    ];

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: '20%',
                position: 'fixed',
                top: '60px',
                [`& .MuiDrawer-paper`]: {width: '20%'},
            }}
        >
            <List>
                {navBarItems.map((item, index) => (
                    <ListItem
                        sx={{textAlign: 'center'}}
                        button key={index}
                        component={Link}
                        to={item.path}
                    >
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                <ListItem  sx={{textAlign: 'center'}}>
                    <ListItemText>Dark mode: </ListItemText>
                    <Switch checked={isDarkTheme} onChange={toggleTheme}>
                    </Switch>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navbar