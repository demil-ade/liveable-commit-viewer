import React from "react";
import Router from "../router/router";
import "../styles/global.scss";
import { useEffect, useState } from "react";
import api from "../api/api";

function App(){
  {/*const [info, setInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const createApiCall = async() => {
    try{
      const response = await api.get('/repositories')
      console.log(response.data)
      setInfo(response.data);
    }
    catch(err){
      console.error(err)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    createApiCall();
  }, [])*/}

  return(
    <div className="App">
      <Router/>
      {/*{
        isLoading && <h1>I'm fetching data</h1>
      }
      {
        !isLoading
          &&
        info.length > 0
          ?
          info.map((data) => {
              return(
                <div key={data.id}>
                  <h4>{data.node_id}</h4>
                  <p>{data.name}</p>
                  <p>{data.full_name}</p>
                </div>
              ) 
          })
          :
          <h4>No information to display </h4>
      }*/}
      
    </div>
  );
}
export default App
