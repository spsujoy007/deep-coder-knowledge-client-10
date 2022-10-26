import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const course = useLoaderData();
    const {img, title, description, module, duration} = course;
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
        <Link to="/">
            <Button variant="primary">Go back to home</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;