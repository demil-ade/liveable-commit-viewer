import React from 'react'

function Header(){
    return(
        <div className='navbar'>
            <div className='navbar__wrapper'>
                <h2 className='website-name'>CommitViewer</h2>
                <div className='header-info'>
                    <h3 className='header-about'>About</h3>
                    <h3 className='header-contact'>Contact</h3>
                </div>
            </div>
        </div>
    )
}
export default Header