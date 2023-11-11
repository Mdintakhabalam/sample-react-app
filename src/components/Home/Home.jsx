import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='mt-4'>Welcome to the Landing Page...</h1>
            <Card className='my-4 mx-5' >
                <Card.Body>
                    <Card.Title className='mt-3'>Registration and Login</Card.Title>
                    <div className='my-3'>
                        <Link to='/signup' className='btn btn-primary me-3'>Sign UP</Link>
                        <Link to='/login' className='btn btn-success'>Sign in</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home