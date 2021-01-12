import React from 'react'
import SectionTop from './SectionTop'
import './Body.css'
import SectionWhite from './SectionWhite'
import SectionBlack from './SectionBlack'
import SectionYellow from './SectionYellow'
import SectionBottom from './SectionBottom'

function Body() {
    return (
        <div className="body">
            <SectionTop/>
            <SectionWhite/>
            <SectionBlack/>
            <SectionYellow/>
            <SectionBottom/>
        </div>
    )
}

export default Body
