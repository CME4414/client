import React from 'react';
import {
  Link,
} from 'react-router-dom';

class ProfilIcon extends React.Component {
  render() {
    return (
      <div className="w-16 h-16 absolute right-0 rounded-full float-right mr-10">
        <Link to="/me">
          <img
            alt=""
            className="rounded-full w-16 h-16"
            src="https://randomuser.me/api/portraits/women/16.jpg"
          />
        </Link>
      </div>
    );
  }
}

export default ProfilIcon;
