import React from 'react'
import SectionTop from './SectionTop'
import './Body.css'
import SectionWhite from './SectionWhite'
import SectionBlack from './SectionBlack'
import SectionYellow from './SectionYellow'

function Body() {
    return (
        <div className="body">
            <SectionTop/>
            <SectionWhite/>
            <SectionBlack/>
            <SectionYellow/>
        </div>
    )
}

export default Body
