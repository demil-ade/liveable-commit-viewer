import React from "react";

function ReposButtons(props){
    return(
        <button className ="repos-buttons"onClick ={props.onClick} >{props.text}</button>
    )
}
export default ReposButtons