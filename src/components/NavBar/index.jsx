

import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../authSlice';



const NavBar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const profileName = useSelector(state => state.auth.profileName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (

    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ?
          (
            <>


              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {profileName}
              </Link>
              <Link className="main-nav-item" to="/" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Log Out

              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}

      </div>
    </nav>
  )
};

export default NavBar;