import React from "react";
import CommitButtonTwo from "../Buttons/commitButtonTwo";
import TextInputTwo from "../Inputs/TextInputTwo";

function Head(){
    return(
            <div className="loading">
                <div className="loading-page">
                    <div className="loading-page__header">
                        <h2 className='website-name'>CommitViewer</h2>
                        <div className="loading-page__header__inputs">
                            <TextInputTwo placeholder = "   microsoft/vscode" type="text"/>
                            <CommitButtonTwo text="See commits🎆"/>
                        </div>
                    </div>
                </div>
                <div className="loading-page__body">
                    <div className="loading-page__body__textinput">
                        microsoft/vscode 
                    </div>
                </div>
            </div>
    )
}
export default Head;