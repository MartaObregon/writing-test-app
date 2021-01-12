import React from 'react'
import Nav from './Menu'
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <Nav/>
            <div className="header-container">
                <div className="header-link">
                    <span className="header-scroll">The 2020</span>
                    
                    <h1>WRITING BEE</h1>
                    <p>BECAUSE ALL KIDS LOVE WRITING STORIES!</p>
                    <p>POWERED BY</p>
                    <img alt="BoomWriter" 
                    src="https://thewritingbee.org/assets/boomwriter_bwm_rgb_rev-7c7b2a937ff565d9b1f7326f54abca68d79e881d3f0677306a083c825449c870.png"/>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Header
