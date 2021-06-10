import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {  Nav, Navbar } from 'react-bootstrap'


const Title = () => {
    return (
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand>
                    Velogram
                </Navbar.Brand>
                <Navbar >
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/new">New</Nav.Link>
                        <Nav.Link href="/likes">Likes</Nav.Link>    
                    </Nav>
                </Navbar>
            </Navbar>
    )
}

export default Title