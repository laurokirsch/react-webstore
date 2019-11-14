import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Router>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            Shop
          </Link>
        </div>
        <div className='options'>
          <Link className='option' to='/contact'>
            Contact
          </Link>
        </div>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to='/signin'>Sign In</Link>
        )}
      </Router>
    </div>
  );
};

export default Header;
