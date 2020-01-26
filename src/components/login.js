    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import logo  from '../logo.png';
    import { Checkbox } from '@material-ui/core';
    import './login.css';
    import { Link} from "react-router-dom";
 

    export default class Login extends Component {
      constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
        };
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
              <Form.Group className="formGroup" controlId="email" >
                <Form.Control className="formControl"
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                />
              </Form.Group>
              </div>
              <Form.Group className="formGroup" controlId="password" >
                <Form.Control className="formControl"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group><p />
              <label>
                <Checkbox 
                  //  checked={this.state.checked}
                  //  onChange={this.handleCheckboxChange}
                />
                <span>remember me</span>
              </label><p />

              <Link to='/mainPage' 
                //blocked
                //disabled={!this.validateForm()}
                //type="submit"
              >
               <Button variant="outline-secondary" className="btn-light">Log In</Button>
             
              </Link>

            </Form>
          </div>

        );
      }
    }