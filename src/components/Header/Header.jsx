import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={s.headerPanel}>
        <div className={s.headerCaption}>
          <NavLink to="/ylab">Ylab-2</NavLink>
        </div>
        <div className={s.headerBtn}>
          <NavLink to="/users">Пользователи</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
