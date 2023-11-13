import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [type, setType] = useState('password');

  const navigate = useNavigate();
  let isSignInButtonDisabled = true;

  const handleToggle = () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
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

  const validatePassword = () => {
    if (!formData.password.trim()) {
      setErrors(prev => ({
        ...prev,
        password: "Password is required"
      }));
    }else {
      setErrors(prev => ({
          ...prev,
          password: ""
      }));
  }
  }

  if (errors.email || errors.password) {
    isSignInButtonDisabled = true;
  } else if (formData.email && formData.password) {
    isSignInButtonDisabled = false;
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("form:", formData);
    axios.get(`http://localhost:8000/users/${formData.email}`)
      .then((res) => {
        if(res && res.data.password == formData.password){
          toast.success("Sign in successful")
          navigate("/dashboard",{state:res.data});
          sessionStorage.setItem("userEmail", formData.email);
          sessionStorage.setItem("userName", res.data.name)
        }else{
          toast.error("Please enter valid credentials.")
        }
      })
      .catch((err) => {
        toast.error("Please Enter a valide Email Id.")
      })
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
                  value={formData.email}
                ></input>
                {errors.email && <span className='text-danger text-start fs-6'>{errors.email}</span>}
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                <label htmlFor='password' className='me-3'>Password*</label>
              </Col>
              <Col className={`d-flex flex-column ${!errors.password ? 'mb-4' : ''}`}>
                <div className='d-flex flex-row align-items-center'>
                  <input type={type} placeholder='Password' id='password' className='w-75'
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
              <button type="submit" className='btn btn-success'
                onClick={handleSignIn}
                disabled={isSignInButtonDisabled}>Sign In</button>
            </div>
          </form>
        </Card>
      </>
    </div>
  )
}

export default Login