import React from 'react';
import {
  Link,
} from 'react-router-dom';
import logo from '../img/high5-yellow.png';
import ProfileIcon from './ProfileIcon';

class Header extends React.Component {
  render() {
    return (
      <header className="text-gray-600  body-font">
        <div className="container flex flex-wrap p-0 md:flex-row items-center justify-between">
          <div className="flex flex-wrap p-4 md:flex-row items-center">
            <Link to="/">
              <img
                alt=""
                className="w-20"
                src={logo}
              />
            </Link>
          </div>
          {window.localStorage.getItem('token') && <ProfileIcon />}
        </div>
      </header>
    );
  }
}

export default Header;
