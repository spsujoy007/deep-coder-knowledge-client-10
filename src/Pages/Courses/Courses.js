import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const course = useLoaderData();
    const {img, title, description} = course;
    return (
        
    );
};

export default Courses;