import React from "react";

function TextInput(props){
    return(
        <input placeholder ={props.placeholder} type={props.type} className="repos-input"/>
    )
}
export default TextInput