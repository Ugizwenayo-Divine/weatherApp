/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import WeatherIcon from 'react-open-weather-icons';
import PropTypes from 'prop-types';

const DisplayData = ({ weatherInfo }) => {
  if (weatherInfo) {
    weatherInfo.main.temp = (weatherInfo.main.temp - 273.15).toFixed(1);
    weatherInfo.main.temp_min = (weatherInfo.main.temp_min - 273.15).toFixed(1);
    weatherInfo.main.temp_max = (weatherInfo.main.temp_max - 273.15).toFixed(1);
  }
  return (
    <div className="main-display">
      <WeatherIcon name={weatherInfo ? weatherInfo.weather[0].icon : ''} className="my-awesome-icon display" />
      <p>{weatherInfo ? `${weatherInfo.name},${weatherInfo.sys.country} ${weatherInfo.weather[0].description}` : ''}</p>
      <p>
        {weatherInfo ? `${weatherInfo.main.temp}° temperature from ${weatherInfo.main.temp_min}° to ${weatherInfo.main.temp_max}°, wind ${weatherInfo.wind.speed}m/s. clouds ${weatherInfo.clouds.all}% ` : ''}
      </p>
    </div>
  );
};

DisplayData.propTypes = {
  weatherInfo: PropTypes.object.isRequired,
};
export default DisplayData;
