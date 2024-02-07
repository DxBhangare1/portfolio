
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'



const Header = () => {
  return (

    <>
      <intro />
      <div className='Navbar'>
        <div className='left'>Dx Bhangare</div>
        <div className='right'>
          <Link to='Header'>Header</Link>
          <Link to='Aboutme'>AboutMe</Link>
          <Link to='Contact'>Contact</Link>
          <Link to='Footer'>Footer</Link>
          <Link to='Intro'>Intro</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
