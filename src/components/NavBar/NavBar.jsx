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
                height: '100vh',
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
                        <ListItemText>
                            <Typography color={'text.secondary'}>
                                {item.text}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
                <ListItem  sx={{textAlign: 'center'}}>
                    <ListItemText>
                        <Typography color={'text.secondary'}>
                            Dark mode:
                        </Typography>
                    </ListItemText>
                    <Switch checked={isDarkTheme} onChange={toggleTheme}/>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navbar