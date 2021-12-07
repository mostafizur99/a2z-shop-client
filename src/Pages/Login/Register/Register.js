import React, { useState } from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import useFirebase from '../../../hooks/useFirebase';


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, authError } = useFirebase();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, navigate);
        // registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="register-section">
                <Container fluid>
                    <div className="register-wrap">
                        <div className="register-content shadow">
                            <Row className="align-items-center">
                                {/* Register form column */}
                                <Col md={12} >
                                    <div className="register-form">
                                        <h3 className="register mb-3">Register</h3>
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="mb-3">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="name"
                                                    type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name" required />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="email"
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="password"
                                                    type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="password2"
                                                    type="password" className="form-control" id="exampleInputPassword2" placeholder="Pepeat Password" required />
                                            </div>

                                            <button type="submit" className="btn register">Register</button>

                                        </form>

                                        {/* Success Message  */}
                                        {user?.email && <Alert variant='success'>User Created Successfully</Alert>}

                                        {/* Error Message  */}
                                        {authError && <Alert variant='danger'>{authError}</Alert>}

                                        <div className=" mt-3"><span className=" me-2">Already have an account?</span><Link to="/login" className='login-link'>Login</Link></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Register;