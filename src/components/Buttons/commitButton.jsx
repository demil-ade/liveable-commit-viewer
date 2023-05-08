import React, { useEffect, useState } from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

function CommitButton(props) {
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

  return (
    <>
        <div type='search' className='commit-button' onClick={() => handleSearchCommits()}>{props.text}</div>
    </>
  )
}

export default CommitButton