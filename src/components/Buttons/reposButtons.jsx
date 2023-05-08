import React from "react";
import { Link } from "react-router-dom";

function ReposButtons(props){
    return(
        <>
            <Link to="/view-commits" state={{ data: props.to }} className ="repos-buttons" onClick ={props.onClick} >{props.text}</Link>
        </>
    )
}
export default ReposButtons