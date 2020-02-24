/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ page }) => (
  <div className="container">
    {
      (page === 'Signup' || page === 'Login' || page === 'Landing') && (
        <ul>
          <li><Link id="home" className="navList" to="/">HOME</Link></li>
          <li><Link id="signup" className="navList" to="/signup">SIGNUP</Link></li>
          <li><Link id="login" className="navList" to="/login">LOGIN</Link></li>
        </ul>
      )
    }
    {
      (page === 'CurrentWeather' || page === 'ForecastWeather') && (
        <ul>
          <li><Link id="weather" className="navList" to="/currentWeather">CURRENT</Link></li>
          <li><Link id="forecast" className="navList" to="/foreCastWeather">FORECAST</Link></li>
          <li><Link id="logout" className="navList" to="/login">LOGOUT</Link></li>
        </ul>
      )
    }
  </div>
);
NavBar.propTypes = {
  page: PropTypes.string.isRequired,
};
export default NavBar;
