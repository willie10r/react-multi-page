import React from 'react';
import { ReactDOM } from 'react';
import { NavLink } from 'react-router-dom';


const Welcome = () => {
    return (
    <div>
        <h1>Welcome to</h1>
        <h2>Racer's Room</h2>
        <ul className='nav-bar'>
            <li><NavLink to='/Welcome'>Home</NavLink></li>
            <li><NavLink to='/Main'>Main</NavLink></li>
            <li><NavLink to='./Sign'>Sign</NavLink></li>
        </ul>
    </div>
    )
};

export default Welcome;