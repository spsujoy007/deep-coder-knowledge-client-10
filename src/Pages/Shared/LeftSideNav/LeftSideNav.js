import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
            <h5 className='my-4'>Total Course: {categories.length}</h5>
            <ListGroup>
            {
                categories.map(category =><p 
                    className="mb-2"
                    key={category.id}
                > <Link className="lists rounded-3" to={`/course/${category.id}`}><ListGroup.Item>{category.title}</ListGroup.Item></Link> </p>)
            }
            </ListGroup>
        </div>
    );
};

export default LeftSideNav;