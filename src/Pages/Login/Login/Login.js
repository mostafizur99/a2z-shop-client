import React, { useState } from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import useFirebase from '../../../hooks/useFirebase';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        // loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="login-section">
                <Container>
                    <div className="login-wrap">
                        <div className="login-content shadow">
                            <Row className="align-items-center">
                                {/* Login form column */}
                                <Col md={12} >
                                    <div className="login-form">
                                        <h3 className="login-header mb-3">Login</h3>
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="email">Your Email</label>
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="email"
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="password"
                                                    type="password" className="form-control" id="exampleInputPassword1" required />
                                            </div>

                                            {/* <div className="text-end mb-3">
                                                <button onClick={handleResetPassword} className=" btn-forgot">Forgot password ?</button>
                                                </div> */}

                                            {/* <div className="row mb-3 text-danger">{error}</div> */}

                                            <button type="submit" className="btn btn-login my-2">Log In</button>
                                        </form>

                                        {/* Success Message  */}
                                        {user?.email && <Alert variant='success'>User Logged In Successfully</Alert>}

                                        {/* Error Message  */}
                                        {authError && <Alert variant='danger'>{authError}</Alert>}
                                        {/* <p className="text-white-50 mt-4">Or Login Using</p> */}


                                        <div className=" mt-3"><span className=" me-2">Don't have an account?</span><Link to="/register" className='login-link'>Register</Link></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Login;