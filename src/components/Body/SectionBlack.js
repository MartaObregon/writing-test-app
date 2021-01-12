import React from 'react'
import './SectionBlack.css'

function SectionBlack() {
    return (
        <div className="section-black">
            <div className="section-black-intro">
                <h3>The Writing Bee Competition</h3>
                <p>The Writing Bee kicks off in schools with students participating in district or school-based Qualifying sessions. Students who qualify move on to the Finals with a chance to be crowned The Writing Bee Champion.</p>
                <img alt="" src="https://thewritingbee.org/assets/how-it-works-diagram-8dca033074ad15625b13e6c7bed19e77ecb7b85673150be0ed24609a5da6783b.png"/>
            </div>

            <div className="competition-steps">
                <ul className="stepslist">
                    <div className="row1">
                    <li className="competition-step">
                        <h4>1. Kick Off</h4>
                        <p>Students read the Writing Bee’s original story start before independently writing their version of the next chapter. Teachers have the option to provide feedback and request revisions before approving each student's work.</p>
                    </li>
                    <li className="competition-step">
                        <h4>2. Qualifying Rounds</h4>
                        <p>Students read the anonymous submissions of their peers in small batches and vote for their favorites. A winning piece is identified to serve as the story’s middle chapter, and the process repeats to identify the final chapter.</p>
                    </li>
                    </div>
                    <div className="row2">
                    <li className="competition-step">
                        <h4>3. Finals</h4>
                        <p>Class chapter winners and top vote-getters qualify to compete in The Writing Bee Finals. Plus, all classroom Qualifying round participants are eligible to read and cast votes for their favorites throughout The Finals.</p>
                    </li>
                    <li className="competition-step">
                        <h4>4. Winner</h4>
                        <p>Writing Bee Finalists create a new story by submitting their work for review by students around the world. Only top vote-getters move on in this ‘knockout style’ event until the 2020 Writing Bee Champion is crowned!</p>
                    </li>
                    </div>
                    

                </ul>
            </div>
        </div>
    )
}

export default SectionBlack
