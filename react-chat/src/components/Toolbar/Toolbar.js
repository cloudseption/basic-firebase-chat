import React from 'react';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo">
        <a href="/">BADGEBOOK</a>
      </div>
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <ul>
          <li>
            <a href={"https://polar-citadel-36387.herokuapp.com/profile/" + window.sessionStorage.getItem("userId")}>
              Profile
            </a>
          </li>
          <li>
            <a href="https://polar-citadel-36387.herokuapp.com/search">Search</a>
          </li>
          <li>
            <a href="https://polar-citadel-36387.herokuapp.com/home">Landing Page</a>
          </li>
          {
            ( window.sessionStorage.getItem("userId") == "" ||
              window.sessionStorage.getItem("userId") == undefined ) ?
            <li><a href="https://polar-citadel-36387.herokuapp.com/auth/login.html">Login</a></li> :
            <li><a className="logout" onClick={props.signOut} href="#">Log out</a></li>
          }
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;