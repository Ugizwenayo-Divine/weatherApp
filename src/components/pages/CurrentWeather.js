import React, { Component } from 'react';
import Select from 'react-select';
import country from '../docs/data';
import {getWeather} from '../../helpers/WeatherFunction';
import DisplayData from './DisplayData';
import NavBar from '../layout/NavBar';


class CurrentWeather extends Component {
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
    getWeather(this,selectedOption.label);
  };
  render(){
    const {selectedCity} = this.state;
    const {details} = this.state;
      console.log('result',details);
      console.log('ok',selectedCity);
      return(
          <div className="main-body main-weather">
            <NavBar page="CurrentWeather" />
          <div className="selectB">
          <Select
          value={selectedCity}
          options={country}
          onChange={this.handleChange}
          />
          </div>
          <DisplayData weatherInfo={details} 
          />
          </div>
      )
  }
}
export default CurrentWeather;