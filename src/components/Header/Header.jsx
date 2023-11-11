import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-secondary">
                <Container>
                    <Navbar.Brand >
                        <Link to="/" className='text-dark text-decoration-none'>Sample React App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Link to="/" className='text-dark text-decoration-none'>Home</Link>
                        {/* <Link to="/dashboard" className='ms-3 text-dark'>Dashboard</Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header