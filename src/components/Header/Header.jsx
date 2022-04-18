import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.header}>
        <NavLink to="/ylab"> Ylab </NavLink>
      </div>
    </header>
  );
}

export default Header;