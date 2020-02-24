import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { loadLocal } from '../../helpers/SignupFunction';
import NavBar from '../layout/NavBar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
        success:false,
        notUser:'',
      },
    };
    this.state = this.initialState;
  }

  handleLoginChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
    console.log('state',this.state);
  }
  submitForm = (event) => {
      let password = this.state.password;
      let email = this.state.email;
    if(email.length===0 || !(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email))){
        event.preventDefault();
        this.setState({errors:{email:'Invalid email'}});
        return; 
    }
    if(password.length<8){
        event.preventDefault();
        this.setState({errors:{password:'wrong password'}});
        return;
    }
      const user= loadLocal();
      if(user.email !== this.state.email || user.password !== this.state.password){
         event.preventDefault();
         this.setState(this.initialState);
         this.setState({errors:{notUser:'You are not user'}});
         console.log(user.email,user.password);
         return;
      }
      this.setState({success:true});
  }

  render() {
    if(this.state.success===true){
      return <Redirect to="/currentWeather"/>
    }
    return (
      <div className="main-body signup">
        <NavBar page="Login" />
        <div className="wrapper login">
          <div className="wrapper-head">
            <h1>LOGIN</h1>
          </div>
          <div className="wrapper-body">
            <form>
              <div className="field-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="field"
                  required
                  placeholder="Email"
                  onChange={this.handleLoginChange}

                /><span>{this.state.errors.email}</span>
              </div>
              <div className="field-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="field"
                  required
                  placeholder="Password"
                  onChange={this.handleLoginChange}

                /><span>{this.state.errors.password}</span>
              </div>
              <span>{this.state.errors.notUser}</span>
              <input type="button" onClick={this.submitForm} value="Login" />
            </form>
            <Link to="/signup" id="link" className="goTo">Create an account</Link>
          </div>

        </div>
      </div>

    );
  }
}
export default Login;
