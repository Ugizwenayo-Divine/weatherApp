import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {storeLocal, loadLocal} from '../../helpers/SignupFunction';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      errors:{
          firstName:'',
          lastName:'',
          email:'',
          password:'',
      },
    };
    this.state = this.initialState;
  }
  componentDidMount() {
    const retrieved = loadLocal();
    console.log('stored',retrieved)
     if (retrieved) {
      this.setState(retrieved);
     }
   }
   componentDidUpdate(prevProps, prevState) {
     let user={
       firstName:this.state.firstName,
       lastName:this.state.lastName,
       email:this.state.email,
       password:this.state.password,
     }
    if (prevState !== this.state) {
        console.log(prevState,this.state);
     storeLocal(user);
    }
   }

  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
    console.log('state',this.state);
  }
  submitForm = (event) => {
      let firstName=this.state.firstName;
      let lastName = this.state.lastName;
      let password = this.state.password;
      let email = this.state.email;
      let confirm= this.state.confirm;
      if(firstName.length <3){
          event.preventDefault();
        this.setState({errors:{firstName:'First name must have above 3 characters'}});
        return;
      }
      if(lastName.length<3){
        event.preventDefault();
      this.setState({errors:{lastName:'Last name must have above 3 characters'}});
      return;
    }
    if(email.length===0 || !(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email))){
        event.preventDefault();
        this.setState({errors:{email:'Invalid email'}});
        return; 
    }
    if(password!==confirm || password.length<8){
        event.preventDefault();
        this.setState({errors:{password:'password must match confirm and greater 7 characters'}});
        return;
    }
    this.setState({errors:{firstName:'',lastName:'',email:'',password:''}});
    this.props.myFunc(this.state);
    this.setState(this.initialState);
    console.log('tired',this.state);
    
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div className="main-body signup">
        <div className="wrapper">
          <div className="wrapper-head">
            <h1>SIGNUP</h1>
          </div>
          <div className="wrapper-body">
            <form>
              <div className="field-container">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="field"
                  required
                  placeholder="FirstName"
                  value={firstName}
                  onChange={this.handleChange}
                />{this.state.errors.firstName}
              </div>
              <div className="field-container">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="field"
                  required
                  placeholder="LastName"
                  value={lastName}
                  onChange={this.handleChange}
                />{this.state.errors.lastName}
              </div>
              <div className="field-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="field"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />{this.state.errors.email}
              </div>
              <div className="field-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="field"
                  required
                  placeholder="Password"
                  onChange={this.handleChange}
                />{this.state.errors.password}
              </div>
              <div className="field-container">
                <input
                  type="password"
                  id="confirm"
                  name="confirm"
                  className="field"
                  required
                  placeholder="Confirm"
                  onChange={this.handleChange}
                />
              </div>
              <input type='button' onClick={this.submitForm} value="Signup"/>
            </form>
            <Link to="/" id="link" className="goTo">Already have an account</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
