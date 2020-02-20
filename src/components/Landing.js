import React, { Component } from 'react';
import WeatherIcon from 'react-open-weather-icons';
import { today, weather } from '../helpers/LandFunction';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    weather(this);
  }

  render() {
    const day = today();
    let kel;
    const { weatherInfo } = this.state;
    if (weatherInfo) {
      kel = (weatherInfo.main.temp - 273.15).toFixed(1);
    }
    return (
      <div className="main-body">
        <p id="des">WEATHER APP</p>
        <p id="day">{day} | {kel}°</p>
        <WeatherIcon name={weatherInfo ? weatherInfo.weather[0].icon : ''} className="my-awesome-icon" />
      </div>
    );
  }
}
export default Landing;