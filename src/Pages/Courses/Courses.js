import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCheckCircle, FaAngleLeft } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Courses = () => {
    const course = useLoaderData();
    const {_id, img, title, description, module, duration} = course;
    useTitle(`${title}`)
    return (
        <Card>
      <Card.Img variant="top" src={img} style={{height: '300px'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <p className='fw-bold text-primary mb-1'>Course Duration: {duration} year</p>
        <p>Total video: {module}</p>
        <Link to={`/checkout/${_id}`}>
            <Button variant="success me-3"><FaCheckCircle className='me-1'></FaCheckCircle> Get premium access.</Button>
        </Link>

        <Link to="/">
            <Button variant="outline-dark"><FaAngleLeft className='me-1'></FaAngleLeft> Back to home</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;