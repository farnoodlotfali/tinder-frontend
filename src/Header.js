import { IconButton } from '@material-ui/core';
import { Forum, Person } from '@material-ui/icons';
import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <IconButton aria-label='delete'>
        <Person fontSize='large' className='header__icon' />
      </IconButton>
      <img
        className='header__logo'
        src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
        alt=''
      />
      <IconButton aria-label='delete'>
        <Forum fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
};

export default Header;
