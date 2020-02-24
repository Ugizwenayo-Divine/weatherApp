/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import WeatherIcon from 'react-open-weather-icons';
import PropTypes from 'prop-types';

const DisplayForecast = ({ weatherInfo }) => {
  if (weatherInfo) {
    weatherInfo.list[0].main.temp = (weatherInfo.list[0].main.temp - 273.15).toFixed(1);
    weatherInfo.list[0].main.temp_min = (weatherInfo.list[0].main.temp_min - 273.15).toFixed(1);
    weatherInfo.list[0].main.temp_max = (weatherInfo.list[0].main.temp_max - 273.15).toFixed(1);

  }
  return (
    <div className="main-display">
      <WeatherIcon name={weatherInfo ? weatherInfo.list[0].weather[0].icon : ''} className="my-awesome-icon display" />
      <p>{weatherInfo ? `${weatherInfo.city.name},${weatherInfo.city.country} ${weatherInfo.list[0].weather[0].description}` : ''}</p>
      <p>
        {weatherInfo ? `${weatherInfo.list[0].main.temp}° temperature from ${weatherInfo.list[0].main.temp_min}° to ${weatherInfo.list[0].main.temp_max}°, wind ${weatherInfo.list[0].wind.speed}m/s. clouds ${weatherInfo.list[0].clouds.all}% ` : ''}
      </p>
    </div>
  );
};

DisplayForecast.propTypes = {
  weatherInfo: PropTypes.object.isRequired,
};
export default DisplayForecast;
