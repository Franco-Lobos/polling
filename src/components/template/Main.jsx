import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar/SideBar";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Config from "../pages/Config/Config";

import { ScrollToTop } from "../../library";

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Results from "../pages/Results/Results";

import { useTheme } from "../providers/theme/ThemeContext";

const Main = ()=>{

    const {dropSide} = useTheme();

    return(
        <BrowserRouter>
            <ScrollToTop/>
            <div id={`main`} className={`${dropSide ? '' : 'hide' }`}>
                <SideBar/>
                <div id="body">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/results" element={<Results/>}/>
                        <Route path="/settings" element={<Config/>}/>
                    </Routes>
                    {/* <Footer/> */}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Main;