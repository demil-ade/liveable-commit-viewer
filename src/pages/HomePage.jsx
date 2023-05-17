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
    const [loading, setLoading] = useState(false)
    const [commits, setCommits] = useState([])

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

    const handleSearchCommits = async() => {
        setLoading(true)
        try{
            const response = await Api.get('https://api.github.com/search/repositories?q=' + repo )
            setCommits(response.data.items)
        }
        catch(err){
            console.error(err)
        }
        finally{
            setLoading(false)
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
                    <CommitButton text="See commits🚀" onClick ={handleSearchCommits}/>
                </div>
                {loading && <h4 className="isLoading">Loading...</h4>}
                {
                    !loading && commits.length > 0
                    ?
                    <h4 className="search-results">Search Results</h4>
                    :
                    ''
                }
                <div className="searches">
                {
                    commits.length > 0
                    ?
                commits.map((info) => {
                    return(
                        
                        <ReposButtons className ='search-buttons' text ={info?.full_name} key ={info?.id} repo ={info.full_name} />
                        
                    )
                })
                :
                ''
                }
                </div>
                <h4 className="suggested-repos">Or pick one of these suggested repos</h4>
                <div className='Home-page__body__inputs__suggested-repos'> 
                {
                    fetchData.length > 0
                    ?
                fetchData.map((data) => {
                    return(
                        
                        <ReposButtons className = 'trending' text={data?.name} key={data?.id} repo ={data.full_name} />
                        
                    )
                })
                :
                ''
                }
                </div>
                
            </div>
        </div>
    )
}
export default Homepage