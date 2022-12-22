import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('https://deep-coder.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    return (
        <div className='pt-5 mt-3'>
            <h5 className='my-4'>Total Course: {categories.length}</h5>
            <ListGroup>
            {
                categories.map(category =><p 
                    className="mb-2"
                    key={category.id}
                > <NavLink className="lists  rounded-3" to={`/course/${category.id}`}><ListGroup.Item className="mybtns">{category.title}</ListGroup.Item></NavLink> </p>)
            }
            </ListGroup>
        </div>
    );
};

export default LeftSideNav;