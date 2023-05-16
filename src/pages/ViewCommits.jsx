import Api from '../api/api';
import React, { useEffect } from 'react'
import { useState } from 'react'
import TextInput from '../components/Inputs/TextInput';
import CommitButton from '../components/Buttons/commitButton';
import { useLocation } from 'react-router-dom';


function Commits(){
    const [ commit, setCommit ] = useState('') 
    const [ commits, setCommits ] = useState([])

    const locate = useLocation();



    useEffect(() => {
        setCommit(locate.state.commit)
    }, [])

    useEffect(() => {
        Api.get('https://api.github.com/search/commits?q=/' + commit.name)
        .then(response => {
            setCommits(response.data.items)
            console.log(response.data)
        })
    }, [])

    return(
        <div className='whole-page'>
            <div className="commits-header">
                <h2 className='website-name'>CommitViewer</h2>
                <div className='input-search'>
                <TextInput  placeholder = "  Eg. facebook/react" type="text"/>
                <CommitButton text="See commits🚀" />
                </div>
            </div>
            <h3>{commit?.name}</h3>
           <div className='commit-body-wrapper'>
            {commits.map((commit, key) => {
              return(
                <div className='commits-body' key={key}>
                    <div className='commits-body__profile'>
                        <img src={commit?.author?.avatar_url} className='profile-container'/>
                        <h5 className='profile-name'>{commit.commit.author.name}</h5>
                    </div>
                    <div className="commits-body__message">
                        <h6 className="message-one">{commit.commit.message}</h6>
                        <p className='message-two'>{commit.commit.committer.date}</p>
                    </div>
                </div>
            
              )
            })}
            </div>
               
        </div>
    )
}
export default Commits;
