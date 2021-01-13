import React from 'react';
import {Button} from 'react-bootstrap'
import './SectionTop.css'
import { Nav} from 'react-bootstrap'

function SectionTop() {
    return (
        <div className="section-top">
            <div className="section-top-container">
                <h1>A GLOBAL EVENT THAT STARTS RIGHT IN YOUR CLASSROOM!</h1>
                <p>Writing Bee Qualifying Rounds take place in individual classrooms around the world. Classroom-based winners and top vote-getters qualify for the Writing Bee Finals and a chance to become The Writing Bee Champion!</p>
                <Nav.Link href="https://boomwriter.com/auth/teacher/signup"><Button classname="btn" variant="primary">START YOUR CLASS WRITING BEE</Button></Nav.Link>
            </div>
            
        </div>
    )
}

export default SectionTop
