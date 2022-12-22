import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {
    useTitle('Home')
    const allCourses = useLoaderData();
    return (
        <div className='mt-5 pt-5'>
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