import React from 'react'
import './Footer.css'
import { Nav} from 'react-bootstrap'

function Footer() {
    return (
        <div className="Footer">
            <div className="logo-container">
                <img alt="BW logo" src="https://thewritingbee.org/assets/boomwriter_logo-ada5d4d81233ed262c6a1818b35d82a488f0a58bb1b759f8294aad48f9fabb7c.png"/>
                <img alt="WB logo" src="https://thewritingbee.org/assets/footer_logo-efb4e14101ccab7751f6e8e15fa7447bedbbb1b9a9889965987fc5a42413ff74.png"/>
                <img alt="Google" src="https://thewritingbee.org/assets/google_partner_logo-7242443848d1047f6ed8451536abdd539bf9223a270e611eb43c8f7924d1c4fe.png"/>
            </div>

            <div className="footer-text">
                <p>The Writing Bee is powered by BoomWriter</p>
                <span>To find out more visit <Nav.Link href="https://boomwriter.com/">www.boomwriter.com</Nav.Link> </span>
            </div>
            
        </div>
    )
}

export default Footer
