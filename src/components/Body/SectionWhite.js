import React from 'react'
import './SectionWhite.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Button} from 'react-bootstrap'
import { Avatar } from '@material-ui/core';

function SectionWhite() {
    return (
        <div className="section-white">
            <div className="section-white-checklist">
                <h4>The writing bee will improve your students' learning by providing:</h4>
                <ul className="checklist">
                    <li className="checklist-item">
                    <div className="checklist-item-intro">
                        <CheckCircleIcon style={{fontSize:50}} htmlColor=" #F4BC08" />
                        <span>Standards-based Writing Practice</span>
                    </div>
                    <p>While creating their story, students will strengthen their use of effective techniques, descriptive details, and clear event sequences.</p>
                    </li>
                    <li className="checklist-item">
                    <div className="checklist-item-intro">
                        <CheckCircleIcon 
                        className="icon"
                        style={{fontSize:50}}
                        htmlColor=" #F4BC08"/>
                        <span>Personalized Writing Feedback</span>
                    </div>
                    
                    <p>Providing students individualized feedback on their own work is the most appropriate and effective approach to teach writing.</p>
                    </li>
                    <li className="checklist-item">
                        <div className="checklist-item-intro">
                        <CheckCircleIcon style={{fontSize:50}} htmlColor=" #F4BC08"/>
                        <span>Online Testing Preparation</span>
                    </div>

                    
                    <p>It’s never too soon to prepare students for the online testing environment where they’ll be expected to produce their best writing.</p>
                    </li>
                    <li className="checklist-item">
                    <div className="checklist-item-intro">
                        <CheckCircleIcon  style={{fontSize:50, }} htmlColor=" #F4BC08"/>
                        <span>Transferable Writing Skills</span>
                    </div>
                    
                    <p>Storywriting offers a plethora of transferable writing skills that will boost their ability in both fiction and non-fiction writing assignments.</p>
                    </li>
                    

                </ul>

                <Button variant="primary">START YOUR CLASS WRITING BEE</Button>
            </div>

            <div className="section-white-testimony">
                <Avatar variant="square"  src="https://randomuser.me/api/portraits/women/36.jpg"/>
            </div>
            
        </div>
    )
}

export default SectionWhite
