import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const SignUp = () => {
    

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

    console.log("name: ", formData.name)
    console.log("mobile: ", formData.mobile)

    const validateName = () => {
        if (!formData.name.trim()) {
            setErrors(prev => ({
                ...prev,
                name: "Name is required"
              }));
          }else{
            setErrors(prev => ({
                ...prev,
                name: ""
              }));
          }
    }

    const validateEmail =() => {
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
          }else{
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
          }else{
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
                password: "Password is required'"
              }));
          }
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
                            onChange={e => setFormData( prev => ({...prev, name: e.target.value}))}
                            onBlur={validateName}
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
                            onChange={e => setFormData( prev => ({...prev, email: e.target.value}))}
                            onBlur={validateEmail}
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
                            onChange={e => setFormData( prev => ({...prev, mobile: e.target.value}))}
                            onBlur={validateMobile}
                            ></input>
                            {errors.mobile && <span className='text-danger text-start fs-6'>{errors.mobile}</span>}
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col>
                            <label htmlFor='password' className='me-3'>Password*</label>
                        </Col>
                        <Col className={`d-flex flex-column ${!errors.password ? 'mb-4' : ''}`}>
                            <input placeholder='Password' id='password' className='w-75'
                            onChange={e => setFormData( prev => ({...prev, password: e.target.value}))}
                            onBlur={validatePassword}
                            ></input>
                            {errors.password && <span className='text-danger text-start fs-6'>{errors.password}</span>}
                        </Col>
                    </Row>
                    <div className='mt-4'>
                        <button type="submit" className='btn btn-primary'>Sign Up</button>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default SignUp