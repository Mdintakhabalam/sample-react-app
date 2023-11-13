import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [pathname, setPathName] = useState('');
    useEffect(() => {
        setPathName(location.pathname);
    },[location.pathname])
    return (
        <div>
            <Navbar expand="lg" className="bg-body-secondary">
                <Container>
                    <Navbar.Brand >
                        <Link to="/" className='text-dark text-decoration-none'>Sample React App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Link to="/" className='text-dark text-decoration-none text-start h6 flex-grow-1 mb-0'>Home</Link>
                        { pathname === "/dashboard" ?
                            <Link to="/login" className='btn btn-dark float-right h6 mb-0 flexd-shrink-0'
                                onClick={() => sessionStorage.clear()}
                            >Log out</Link>
                            : null
                        }
                        { pathname === "/signup" ?
                            <Link to="/login" className='btn btn-success float-right h6 mb-0 flexd-shrink-0'
                               
                            >Sign In</Link>
                            : null
                        }
                        { pathname === "/login" ?
                            <Link to="/signup" className='btn btn-primary float-right h6 mb-0 flexd-shrink-0'
                               
                            >Sign Up</Link>
                            : null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header