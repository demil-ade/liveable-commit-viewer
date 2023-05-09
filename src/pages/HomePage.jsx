import React from "react";
import Header from "../components/Header/header";
import ReposButtons from "../components/Buttons/reposButtons";
import { useEffect, useState } from "react";
import Api from '../api/api';
import CommitButton from "../components/Buttons/commitButton";
import TextInput from "../components/Inputs/TextInput";


function Homepage(){
    const [fetchData, setFetchData] = useState([])
    const [repo, setRepo] = useState('')

    const handleChange = (e) => {
        setRepo(e.target.value)
    }

    const trendingRepos = async() => {
        try{
            const response = await Api.get('https://api.github.com/search/repositories?q=language:javaScript+sort:stars&per_page=4')
            console.log(response.data)
            setFetchData(response.data.items)
        }
        catch(err){
            console.error(err)
        }
    }
    
    useEffect(() => {
        trendingRepos();
    }, [])


    return(
        <div className="Home-page">
            
            <Header/>
        
            <div className="Home-page__body">
                <div className="Home-page__body__gist" >
                    <h1>Discover the world of code</h1>
                    <h3>Explore open source projects from GitHub, and read their commit history to see the story of how they were built</h3>
                </div>
                <div className="Home-page__body__inputs">
                    <TextInput onChange={handleChange} placeholder ="Eg. facebook/react" type="text"/>
                    <CommitButton text="See commits🚀" repo={repo}/>
                </div>
                <h4>Or pick one of these suggested repos</h4>
                {
                    fetchData.length > 0
                    ?
                fetchData.map((data) => {
                    return(
                        <div className='Home-page__body__inputs__suggested-repos' key={data.id}>
                            <ReposButtons to={data} text={data.name}  />
                        </div>
                    )
                })
                :
                ''
                }
                
            </div>
        </div>
    )
}
export default Homepage