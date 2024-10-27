import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./layouts/MainPage/MainPage";
import HomePage from "./layouts/HomePage/HomePage";
import AboutPage from "./layouts/AboutPage/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import HeroPage from "./layouts/HeroPage/HeroPage";
import Box from "@mui/material/Box";

function App() {

    return (
        <Box>
            <NavBar/>
            <Box sx={{ height: '90vh', width: '80%', marginLeft: '20%'}}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/heroes'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/heroes/:id'} element={<HeroPage/>}/>
                </Routes>
            </Box>
        </Box>
    );
}

export default App;