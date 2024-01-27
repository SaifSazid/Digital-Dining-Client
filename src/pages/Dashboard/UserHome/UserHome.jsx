import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className='text-4xl'>Hello {user.displayName}</h2>
            <h3>Explore our menu from <Link to='/menu' className='text-blue-500'>here</Link></h3>
        </div>
    );
};

export default UserHome;