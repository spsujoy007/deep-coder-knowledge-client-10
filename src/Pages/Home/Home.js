import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>Total courses is: {allCourses.length}</h2>
            <div className="container">
            <div className='row g-2'>
                {
                allCourses.map(course => <CourseCard 
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;