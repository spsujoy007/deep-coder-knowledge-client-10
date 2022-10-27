import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{height: "90vh"}} className='d-flex align-items-center justify-content-center'>
            <div className='text-center'>
            <h1 style={{fontSize: "200px", fontFamily: "arial"}} className="display-1 fw-bold text-danger">404!</h1>
            <h4>CAN NOT FIND THIS PAGE</h4>
            <Link to="/"><button className='btn btn-danger mt-4'>BACK TO HOME</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;