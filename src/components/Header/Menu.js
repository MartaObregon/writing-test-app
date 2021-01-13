import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top" className="menuContainer">
                <img src="https://thewritingbee.org/assets/menu_logo-ff147e7a83d6f97732b11c0e127c1bb71810bb3e028c36430dd195660003b54f.png" alt="" className="menuLogo"/>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <Nav.Link href="#pricing">Home</Nav.Link>
                    <Nav.Link href="#pricing">Past Writing Bees</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu
