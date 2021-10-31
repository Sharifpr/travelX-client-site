import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { AllContexts } = useAuth();
    const { user } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div>
            <h1 className="text-center">Pofile</h1>
            <div className="container ">
                <Row className="d-flex align-items-center">
                    <Col md={4}>
                        <div className='text-center d-flex flex-column align-items-center'>
                            <img src={photoURL} width="200px" className="rounded-circle" alt="" />
                            <button className="btn btn-primary mx-auto mt-3">Edit Profile</button>
                        </div>

                    </Col>
                    <Col md={8}>
                        <h3>Full Name</h3>
                        <h5>{displayName}</h5>
                        <h3>Email Address</h3>
                        <h5>{email}</h5>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Profile;