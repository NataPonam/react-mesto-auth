import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = ({ email, onSignOut }) => {
  const location = useLocation();

  return (
    <nav className="header__nav">
      {location.pathname === '/sign-in' && (
        <Link to="/sign-up" className="header__nav_link">
          Регистрация
        </Link>
      )}
      {location.pathname === '/sign-up' && (
        <Link to="/sign-in" className="header__nav_link">
          Войти
        </Link>
      )}
      {location.pathname === '/' ? (
        <>
          <span className="header__nav_text">{email}</span>
          <Link
            to="/sign-up"
            className="header__nav_link-out"
            onClick={onSignOut}
          >
            Выйти
          </Link>
        </>
      ) : (
        ''
      )}
    </nav>
  );
};

export default NavBar;
