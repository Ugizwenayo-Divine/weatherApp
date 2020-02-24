import React,{Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import CurrentWeather from './components/pages/CurrentWeather';
import ForecastWeather from './components/pages/ForecastWeather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[],
  };
  }
    handleSubmit = user =>{
        this.setState({users: [...this.state.users, user]})
    }
    render(){
        console.log('Appstate', this.state.users);
        return(
  <HashRouter>
    
    <Route
      exact
      path="/"
      component={Landing}
    />
        <Route
      exact
      path="/signup"
    component={()=>(<Signup myFunc={this.handleSubmit}/>)}
    /> 
        <Route
      exact
      path="/login"
      component={Login}
    />
                    <Route
      exact
      path="/forecastWeather"
      component={ForecastWeather}
    />
            <Route
      exact
      path="/currentWeather"
      component={CurrentWeather}
    />

  </HashRouter>)}
};

export default App;
