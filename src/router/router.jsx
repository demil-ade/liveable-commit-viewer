import React from "react";
import Home from "../pages/home";
import Commits from "../pages/ViewCommits";
import Loading from "../pages/ViewCommitsLoading";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path= "loading" element ={<Loading/>} />
                <Route path ="commits" element ={<Commits/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;