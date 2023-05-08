import React from "react";

function TextInput(props){
    return(
        <span>
        <i className ="fa fa-search icon"></i>
        <input onChange={props.onChange} placeholder ={props.placeholder} type={props.type} className="repos-input"/>
        </span>
    )
}
export default TextInput