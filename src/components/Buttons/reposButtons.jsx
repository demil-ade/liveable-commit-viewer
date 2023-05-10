import React from "react";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import Api from "../../api/api";

function ReposButtons(props){
  const {repo} = props;
  const [commits, setCommits] = useState([]);

  const router = useNavigate();

  const handleSearchCommits = () => {
      Api.get('https://api.github.com/repos/' + repo + '/commits')
      .then(response => {
        setCommits(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
      if(commits.length > 0) {
        router('/view-commits', {
          state: {
            commits
          }
        })
      }
  }, [commits])

    return(
        <>
            <button className ={props.className} onClick ={handleSearchCommits} >{props.text}</button>
        </>
    )
}
export default ReposButtons