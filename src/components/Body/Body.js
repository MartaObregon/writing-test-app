import React from 'react'
import SectionTop from './SectionTop'
import './Body.css'
import SectionWhite from './SectionWhite'
import SectionBlack from './SectionBlack'

function Body() {
    return (
        <div className="body">
            <SectionTop/>
            <SectionWhite/>
            <SectionBlack/>
        </div>
    )
}

export default Body
