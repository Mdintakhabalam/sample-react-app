import React, { useState }  from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

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

  const validatePassword = () => {
    if (!formData.password.trim()) {
      setErrors(prev => ({
        ...prev,
        password: "Password is required'"
      }));
    }
  }
  return (
    <div>
      <>
        <h1 className='mt-5'>Sign In</h1>
        <Card className='mx-5 mt-5'>
          <form className='my-5'>

            <Row className='mt-3'>
              <Col>
                <label htmlFor='email' className='me-3'>Email* </label>
              </Col>
              <Col className={`d-flex flex-column ${!errors.email ? 'mb-4' : ''}`}>
                <input placeholder='Email' id='email' className='w-75'
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  onBlur={validateEmail}
                ></input>
                {errors.email && <span className='text-danger text-start fs-6'>{errors.email}</span>}
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                <label htmlFor='password' className='me-3'>Password*</label>
              </Col>
              <Col className={`d-flex flex-column ${!errors.password ? 'mb-4' : ''}`}>
                <input placeholder='Password' id='password' className='w-75'
                  onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  onBlur={validatePassword}
                ></input>
                {errors.password && <span className='text-danger text-start fs-6'>{errors.password}</span>}
              </Col>
            </Row>
            <div className='mt-4'>
              <button type="submit" className='btn btn-primary'>Sign In</button>
            </div>
          </form>
        </Card>
      </>
    </div>
  )
}

export default Login