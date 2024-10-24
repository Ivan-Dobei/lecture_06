import React from 'react';
import './index.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./layouts/MainPage/MainPage";
import HomePage from "./layouts/HomePage/HomePage";
import AboutPage from "./layouts/AboutPage/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import {Drawer} from "@mui/material";
import HeroPage from "./layouts/HeroPage/HeroPage";

function App() {

    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path={'/heroes'} element={<HomePage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/heroes/:id'} element={<HeroPage/>}/>
            </Routes>
        </div>
    );
}

export default App;