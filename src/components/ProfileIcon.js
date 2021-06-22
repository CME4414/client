import React from 'react';
import {
  Link,
} from 'react-router-dom';

class ProfilIcon extends React.Component {
  render() {
    return (
      <div className="h-16 absolute right-0 rounded-full float-right mr-10">
        <Link to="/me">
          {JSON.parse(window.localStorage.getItem('user')).name}
        </Link>
        {window.localStorage.getItem('token') && (
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/logout"
          >
            Log out
          </Link>
        )}
      </div>
    );
  }
}

export default ProfilIcon;
