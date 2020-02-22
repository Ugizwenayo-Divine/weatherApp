import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <ul>
          <li><Link id="home" className="navList" to="/">HOME</Link></li>
          <li><Link id="signup" className="navList" to="/Signup">SIGNUP</Link></li>
          <li><Link id="login" className="navList" to="/#">LOGIN</Link></li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
