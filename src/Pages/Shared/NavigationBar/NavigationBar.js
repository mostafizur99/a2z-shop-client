import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './NavigationBar.css';

const NavigationBar = () => {
    const { user, logout } = useFirebase();

    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" sticky="top">
                    <Container>
                        <Navbar.Brand href="/"><h2 className="logo-nav">A2Z Shop</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                                {
                                    !user?.email ?
                                        <>
                                            <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>
                                            <Nav.Link as={Link} className="text-white" to="/register">Register</Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link as={Link} className="text-white" to="/dashboard">Dashboard</Nav.Link>
                                            <span>
                                                <div > <span className="nav-user text-white">{user.displayName}</span></div>
                                                <button onClick={logout} className="nav-sign-out mt-1 ms-1">Sign out</button>
                                            </span>
                                        </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default NavigationBar;