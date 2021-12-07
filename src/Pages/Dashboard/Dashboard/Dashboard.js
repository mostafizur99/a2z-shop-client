import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';


const Dashboard = () => {
    const { admin } = useFirebase();
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="dashboard-section">
                <Container fluid>
                    <Row>
                        <Col md={3} lg={3} >
                            <div className="dashboard-nav bg-dark h-100">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    {
                                        !admin &&
                                        <>
                                            <Nav.Link as={Link} to="/dashboard">My Products</Nav.Link>

                                        </>
                                    }
                                    {
                                        admin &&
                                        <>
                                            <Nav.Link as={Link} to="/dashboard">Manage Products</Nav.Link>
                                            <Nav.Link as={Link} to="/dashboard/addProduct">Add Product</Nav.Link>

                                        </>
                                    }
                                </Nav>
                            </div>
                        </Col>
                        <Col md={9} lg={9} >
                            <div className="dashboard-container">
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Dashboard;