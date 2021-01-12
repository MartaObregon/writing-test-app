import React from 'react'
import './SectionYellow.css'

function SectionYellow() {
    return (
        <div className="section-yellow">
            <div className="section-yellow-intro">
                <div className="intro-title">
                    <h3>The Writing Bee is powered by</h3>
                    <img alt="" src="https://thewritingbee.org/assets/bw_splat-f0ec5b4b4686e45c0db67aaacd020c8f4ad5ef13f708bd767665d53f8c0dd94c.png"/>
                </div>
                <p>The Writing Bee employs BoomWriter’s unique content generation platform that allows students to compete and collaborate online as they:</p>
            </div>

            <ul className="activities-list">
                <div className="row">
                <li className ="list-item">
                    <img alt="icon" src="https://thewritingbee.org/assets/works_bullet_read-b23db1377a563e2482cbcf10dc3d23d481c8205c56a5458cacf950073f21b9fe.png"/>
                    <h2>Read/View</h2>
                    <p>The prompt</p>
                </li>
                <li className ="list-item">
                    <img alt="icon" src="https://thewritingbee.org/assets/works_bullet_write-30fe71cb5b7aed643e9ec89bd85775da99a8a26282d65e3400e3a73d9c4adc99.png"/>
                    <h2>Write</h2>
                    <p>An Entry</p>
                </li>
                </div>
                
                <div className="row">
                <li className ="list-item">
                    <img alt="icon" src="https://thewritingbee.org/assets/works_bullet_share-734fc49f13828da8605e5523459d69d195f95b091bb19eaa5dc01ca4f7d72059.png"/>
                    <h2>Share</h2>
                    <p>With peers</p>
                </li>
                <li className ="list-item">
                    <img alt="icon" src="https://thewritingbee.org/assets/works_bullet_vote-eed8b32e0372a14ce464f78f177d38c3cf009bda47581a5b2e203ba73d964e5e.png"/>
                    <h2>Vote</h2>
                    <p>For the favourite</p>
                </li>
                </div>
               
               <div className="row">
               <li className ="list-item1">
                    <img alt="icon" src="https://thewritingbee.org/assets/works_bullet_repeat-3f83dc5698886e51c18990a71d1dc1787aa1f501a4fc35cfe4eae56a9a9368ea.png"/>
                    <h2>Repeat</h2>
                    <p>Until complete</p>
                </li>

               </div>
                
            </ul>
        </div>
    )
}

export default SectionYellow
