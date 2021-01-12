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
                 
                   
                </div>
                <div className="header-powered">
                        <p >POWERED BY</p>
                        <img alt="BoomWriter" 
                        src="https://thewritingbee.org/assets/boomwriter_bwm_rgb_rev-7c7b2a937ff565d9b1f7326f54abca68d79e881d3f0677306a083c825449c870.png"/>
                    </div>

                <img className="header-img" alt="globe" src="https://thewritingbee.org/assets/hero_globe-5ef25db2cafdbab57261ff07b1b20217c7d6bf94ddee764bfb313effaa1703fd.png"/>
                <img alt="tag-globe" className="header-img-tag" src ="https://thewritingbee.org/assets/triangle-57cf8c1dc84d3bcaf8cbe63966f680f2bca1f9f101e317fd345499202d77129a.png"/>
                
                
                
            </div>
        </div>
    )
}

export default Header
