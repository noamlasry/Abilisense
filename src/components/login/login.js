    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import logo  from '../../logo.png';
    import { Checkbox } from '@material-ui/core';
    import './login.css';

    import fire from './config/fire';
 

    export default class Login extends Component {

      childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent("Hello From Child1");
    }

      login() {
  
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            
            console.log('Error: ' + err.toString());
            this.setState({userMassge:"Invalid user name or paasword"});
          })
      }
     

      constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: "",
          userMassge: ""
        };
        this.login = this.login.bind(this);
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }
      
      render() {
       
        return (
          <div className="Login">
           
            <img src = {logo} className="App-logo" alt="logo"></img>
            <Form onSubmit={this.handleSubmit}>
              <div>
              <Form.Group className="formGroup"  >
                <Form.Control className="formControl"
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                  id="email"
                />
              </Form.Group>
              </div>
              <Form.Group className="formGroup"  >
                <Form.Control className="formControl"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </Form.Group><p />
              <label>
                <Checkbox 
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange}
                />
                <span>remember me</span>
              </label><p />
               <Button onClick={this.login} variant="outline-secondary" className="btn-light">Log In</Button> 
               <div className="error-massage">{this.state.userMassge}</div>
            </Form>
          </div>

        );
      }
    }