import React from 'react'
import './SectionWhite.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Button} from 'react-bootstrap'
import { Avatar } from '@material-ui/core';

import { Nav} from 'react-bootstrap'

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

                <Nav.Link href="https://boomwriter.com/auth/teacher/signup"><Button classname="btn" variant="primary">START YOUR CLASS WRITING BEE</Button></Nav.Link>
            </div>

            <div className="section-white-testimony">
                <Avatar variant="square"  src="https://randomuser.me/api/portraits/women/36.jpg" className="testimony-avatar"
                    style={{width:"100px", height:"100px"}}
                />
                <div className="testimony-card">
                    <blockquote>
                    The Writing Bee was the most valuable writing experience I have had with my class in many years. My students were fully engaged - they collaborated, edited, imagined, improved, and happily worked for many hours on their chapter writing. My students improved their writing skills and also learned that they love writing.  Invaluable lessons.  Thank you, BoomWriter!
                    </blockquote>
                    <p className="testimony-signature">D.Wilson</p>
                    <span className="testimony-address">Camino Elementary School, Camino, California USA</span>
                </div>
                
                <Nav.Link href="https://boomwriter.com/auth/teacher/signup"><Button classname="btn" variant="primary">START YOUR CLASS WRITING BEE</Button></Nav.Link>
            </div>
            
        </div>
    )
}

export default SectionWhite
