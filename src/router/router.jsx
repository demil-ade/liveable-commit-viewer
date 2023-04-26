import React from "react";
import Homepage from "../pages/HomePage";
import Commits from "../pages/ViewCommits";
import Loading from "../pages/ViewCommitsLoading";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element ={<Homepage/>} />
                <Route path= "loading" element ={<Loading/>} />
                <Route path ="commits" element ={<Commits/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;