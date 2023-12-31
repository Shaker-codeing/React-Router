import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/friends'>Friend</NavLink>
        </div>
    );
};

export default Header;