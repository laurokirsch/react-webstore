import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
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
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
