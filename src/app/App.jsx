import React from "react";
import Router from "../router/router";
import "../styles/global.scss";
import { useEffect, useState } from "react";
import api from "../api/api";

function App(){
  const [info, setInfo] = useState([])

  const createApiCall = async() => {
    try{
      const response = await api.get('/')
      console.log(response.data)
      setInfo(response.data);
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    createApiCall();
  }, [])

  const APIS = info.map((data) => {
    return(
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    )
  })

  return(
    <div className="App">
      <Router/>
      
    </div>
  );
}
export default App

//<tr>
        //<td>ID</td>
        //<td>TITLE</td>
        //<td>BODY</td>
      //</tr>
      //{APIS}