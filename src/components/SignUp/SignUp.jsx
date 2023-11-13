import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { FaCheckCircle } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

  const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    });
    const [type, setType] = useState('password');

    let isSubmitButtonDisabled = true;


    const validateName = () => {
        if (!formData.name.trim()) {
            setErrors(prev => ({
                ...prev,
                name: "Name is required"
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                name: ""
            }));
        }
    }

    const validateEmail = () => {
        if (!formData.email.trim()) {
            setErrors(prev => ({
                ...prev,
                email: "Email is required"
            }));
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            setErrors(prev => ({
                ...prev,
                email: "Invalid email format"
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                email: ""
            }));
        }
    }

    const validateMobile = () => {
        if (!formData.mobile.trim()) {
            setErrors(prev => ({
                ...prev,
                mobile: "Mobile is required"
            }));
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            setErrors(prev => ({
                ...prev,
                mobile: "Invalid mobile number"
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                mobile: ""
            }));
        }
    }

    const validatePassword = () => {
        if (!formData.password.trim()) {
            setErrors(prev => ({
                ...prev,
                password: "Password is required"
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                password: ""
            }));
        }
    }

    if (errors.name || errors.email || errors.mobile || errors.password) {
        isSubmitButtonDisabled = true;
    } else if (formData.name && formData.email && formData.mobile && formData.password) {
        isSubmitButtonDisabled = false;
    }

    const handleToggle = () => {
        if (type === 'password') {
          setType('text')
        } else {
          setType('password')
        }
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form:", formData);
        formData.id = formData.email;
        axios.post("http://localhost:8000/users", formData)
            .then(() => {
                //console.log("Data added");
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    password: '',
                  });
                setShow(true)
            })
            .catch((err) => {
                console.log("error", err);
            })
    }

    return (
        <>
            <h1 className='mt-5'>Sign Up</h1>
            <Card className='mx-5 mt-5'>
                <form className='my-5'>
                    <Row>
                        <Col>
                            <label htmlFor='name' className='me-3'>Name* </label>
                        </Col>
                        <Col className={`d-flex flex-column ${!errors.name ? 'mb-4' : ''}`}>
                            <input placeholder='Name' id='name' className='w-75'
                                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                onBlur={validateName}
                                value={formData.name} 
                            ></input>
                            {errors.name && <span className='text-danger text-start fs-6'>{errors.name}</span>}
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col>
                            <label htmlFor='email' className='me-3'>Email* </label>
                        </Col>
                        <Col className={`d-flex flex-column ${!errors.email ? 'mb-4' : ''}`}>
                            <input placeholder='Email' id='email' className='w-75'
                                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                onBlur={validateEmail}
                                value={formData.email} 
                            ></input>
                            {errors.email && <span className='text-danger text-start fs-6'>{errors.email}</span>}
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col>
                            <label htmlFor='mobile' className='me-3'>Mobile*</label>
                        </Col>
                        <Col className={`d-flex flex-column ${!errors.mobile ? 'mb-4' : ''}`}>
                            <input placeholder='Mobile Number' id='mobile' className='w-75'
                                onChange={e => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                                onBlur={validateMobile}
                                value={formData.mobile} 
                            ></input>
                            {errors.mobile && <span className='text-danger text-start fs-6'>{errors.mobile}</span>}
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col>
                            <label htmlFor='password' className='me-3'>Password*</label>
                        </Col>
                        <Col className={`d-flex flex-column ${!errors.password ? 'mb-4' : ''}`}>
                            <div className='d-flex flex-row align-items-center'>
                                <input placeholder='Password' id='password' className='w-75' type={type}
                                    onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                    onBlur={validatePassword}
                                    value={formData.password}
                                ></input>
                                {type == "password" ?
                                    <FaEyeSlash style={{ marginLeft: "-2rem" }} onClick={handleToggle} />
                                    :
                                    <FaEye style={{ marginLeft: "-2rem" }} onClick={handleToggle} />
                                }
                            </div>
                            {errors.password && <span className='text-danger text-start fs-6'>{errors.password}</span>}
                        </Col>
                    </Row>
                    <div className='mt-4'>
                        <button type="submit" className='btn btn-primary'
                            onClick={handleSubmit} disabled={isSubmitButtonDisabled}>Sign Up</button>
                    </div>
                </form>
            </Card>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                    <FaCheckCircle size={30} className='ms-3'/>
                </Modal.Header>
                <Modal.Body>Signed up successfully. Thanks for your Subscription.</Modal.Body>
                
            </Modal>  
        </>
    )
}

export default SignUp