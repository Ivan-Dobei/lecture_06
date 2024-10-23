import React from 'react';
import './index.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./layouts/MainPage/MainPage";
import HomePage from "./layouts/HomePage/HomePage";
import AboutPage from "./layouts/AboutPage/AboutPage";
import NavBar from "./components/NavBar/NavBar";

function App() {

    return (
        <div className="main_div">
            <NavBar/>
            <Routes>
                <Route path={'/heroes'} element={<HomePage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </div>
    );
}

export default App;