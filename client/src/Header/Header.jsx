import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {

    return (
      <div className="header">
        <div className="header__menu-area">
          <div className="header__sandwich-menu"></div>
          <div className="header__sandwich-menu"></div>
          <div className="header__sandwich-menu"></div>
        </div>
        <div className="header__title">Motionfy</div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/p">Playlists</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;