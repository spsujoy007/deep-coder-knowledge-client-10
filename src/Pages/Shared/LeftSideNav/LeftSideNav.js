import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            {
                categories.map(category => <p
                    key={category.id}
                > <Link to={`/course/${category.id}`}>{category.title}</Link> </p>)
            }
        </div>
    );
};

export default LeftSideNav;