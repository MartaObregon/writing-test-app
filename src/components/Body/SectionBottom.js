import React from 'react'
import './SectionBottom.css'

function SectionBottom() {
    return (
        <div className="section-bottom">
            <h1>The Writing Bee Timeline</h1>
            <div className="message-container">
            <div className="line"><div className="dot"></div></div>
                <div className="dot"></div>
                <div className="message-box">
                    <div>
                        <img src="https://thewritingbee.org/assets/writing-4eea682091d41e9dd5ce2f2485470a1c984859a44f0177ac243b78a2f07a5a48.png" alt=""/>
                        <span>December - March 2020 - Qualifying Sessions</span>
                    </div>
                    <p>Teachers are welcome to conduct classroom-based qualifying sessions with their students in Grades 4-6.</p>

                </div>
            </div>
            <div className="message-container">
                <div className="line"><div className="dot"></div></div>
                <div className="dot"></div>
                <div className="message-box">
                    <div>
                        <img src="https://thewritingbee.org/assets/finals-24d9f2d913b2fd18f2b8e855f40f6b1ecc86fcf5471d266b6c7b6db9a9a903ba.png" alt=""/>
                        <span>April 2020 - The Finals</span>
                    </div>
                    <p>Qualifying round winners and top vote-getters compete The Writing Finals. All Qualifying session participants are invited to read and cast votes to determine The Writing Bee Champion.</p>

                </div>
            </div>
        </div>
    )
}

export default SectionBottom
