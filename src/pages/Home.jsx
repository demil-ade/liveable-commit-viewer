import React from "react";
import Header from "../components/Header/header";
import CommitButton from "../components/Buttons/commitButton";
import ReposButtons from "../components/Buttons/reposButtons";
import TextInput from "../components/Inputs/TextInput";

function Home(){
    return(
        <div className="Home-page">
            
            <Header/>
        
            
            <div className="Home-page__body">
                <div className="Home-page__body__gist">
                    <h1>Discover the world of code</h1>
                    <h3>Explore open source projects from GitHub, and read their commit history to see the story of how they were built</h3>
                </div>
                <div className="Home-page__body__inputs">
                    <TextInput placeholder = "  Eg. facebook/react" type="text"/>
                    <CommitButton text="See commits🎆"/>
                </div>
                <h4>Or pick one of these suggested repos</h4>
                <div className='Home-page__body__inputs__suggested-repos'>
                    <ReposButtons text ="django/django"/>
                    <ReposButtons text ="microsoft/vscode"/>
                    <ReposButtons text ="jezen/is-thirteen"/>
                    <ReposButtons text ="benawad/dogehouse"/>
                </div>
                
            </div>
        </div>
    )
}
export default Home