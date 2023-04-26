import React from "react";
import Head from "../components/Slices/ViewCommitsTop";

function Loading(){
    return(
        <div>
            <Head/>
            <div className="loading-page__body__indicator">
                Loading...
            </div>
        </div>
    )
}
export default Loading;