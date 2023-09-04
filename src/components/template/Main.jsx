import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Home from "../pages/Home";

import { ScrollToTop } from "../../library";

import {BrowserRouter, Route, Routes } from 'react-router-dom';


const Main = ()=>{
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <div id="main">
                <Header/>
                <div id="body">
                    <SideBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Main;