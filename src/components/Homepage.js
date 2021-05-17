import React from "react";
import { hot } from 'react-hot-loader/root';
import Signup from './Signup';
import Login from './Login';

class Homepage extends React.Component {
    render() {
        return (
          <div className="modal">
            <Signup/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f59e0b" fill-opacity=".6" d="M0,64L24,69.3C48,75,96,85,144,85.3C192,85,240,75,288,101.3C336,128,384,192,432,192C480,192,528,128,576,112C624,96,672,128,720,133.3C768,139,816,117,864,117.3C912,117,960,139,1008,154.7C1056,171,1104,181,1152,202.7C1200,224,1248,256,1296,272C1344,288,1392,288,1416,288L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
          </div>
        );
    }
}

export default hot(Homepage);