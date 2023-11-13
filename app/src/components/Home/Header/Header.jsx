
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
        <nav className='nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/about'>About</Link></li>
      
            </ul>
        </nav>
    </div>
  )
}

export default Header