import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from './assets/oval-bg.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Iron-profile">
          IronProfile
          <p className="profile-p">
            Today we will create an app with authoritation, adding some cool
            styles!
          </p>
          <img
            className="background-img"
            src={backgroundImage}
            alt="background"
          />
          <div className="buttondiv">
            <button>Sign up</button>
            <button>Log in </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
