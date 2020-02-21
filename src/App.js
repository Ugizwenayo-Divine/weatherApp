import React,{Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import NavBar from './components/layout/NavBar';
import Signup from './components/pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
  
    state={
        users:[]
    };
    handleSubmit = user =>{
        this.setState({users: [...this.state.users, user]})
    }
    render(){
        console.log('Appstate', this.state.users);
        return(
  <HashRouter>
    <NavBar />
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
  </HashRouter>)}
};

export default App;
