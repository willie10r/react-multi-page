import React from 'react';
import { ReactDOM } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <ul className='nav-bar'>
            <li className='nav-btn'><NavLink to='/'>Home</NavLink></li>
            <li className='nav-btn'><NavLink to='/Main'>Racer's Room</NavLink></li>
            <li className='nav-btn'><NavLink to='./Sign'>Sign In</NavLink></li>
        </ul>
        </div>
    )
};
  
export default NavBar;