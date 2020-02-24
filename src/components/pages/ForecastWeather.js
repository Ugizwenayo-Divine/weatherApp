import React, { Component } from 'react';
import Select from 'react-select';
import country from '../docs/data';
import {getForecast} from '../../helpers/WeatherFunction';
import DisplayForecast from './DisplayForecast';
import NavBar from '../layout/NavBar';


class ForecastWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: null,
      selectedValues:{}
    };
  }
  handleChange = selectedOption => {
      
      this.setState({selectedCity:selectedOption});
      this.setState({selectedValues:selectedOption});
      console.log('selected option',selectedOption.value)
    getForecast(this,selectedOption.value);
  };
  render(){
    const {selectedCity} = this.state;
    const {forecastDetails} = this.state;
      console.log('result',forecastDetails);
      console.log('ok',selectedCity);
      return(
          <div className="main-body main-weather">
            <NavBar page="ForecastWeather" />
          <div className="selectB">
          <Select
          value={selectedCity}
          options={country}
          onChange={this.handleChange}
          />
          </div>
          <DisplayForecast weatherInfo={forecastDetails} 
          />
          </div>
      )
  }
}
export default ForecastWeather;