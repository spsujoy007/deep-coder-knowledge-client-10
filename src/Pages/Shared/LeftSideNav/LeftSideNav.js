import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    return (
        <div>
            <h5 className='mb-3'>Total categories: {categories.length}</h5>
            <ListGroup>
            {
                categories.map(category =><p
                    key={category.id}
                > <Link className="lists" to={`/course/${category.id}`}><ListGroup.Item>{category.title}</ListGroup.Item></Link> </p>)
            }
            </ListGroup>
        </div>
    );
};

export default LeftSideNav;