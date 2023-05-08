import React from "react";
import Homepage from "../pages/HomePage";
import Commits from "../pages/ViewCommits";
import NoPage from "../pages/NoPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element ={<Homepage/>} />
                <Route path ="view-commits" element ={<Commits/>} />
                <Route path="*" element ={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;