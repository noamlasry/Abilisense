    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import logo  from '../../logo.png';
    import './login.css';
    import fire from './config/fire';
 

    export default class Login extends Component {

      login() {
  
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        this.setState({refreshIcon:!this.state.refreshIcon});
        fire.auth().signInWithEmailAndPassword(email, password)
          .then((u) => { console.log('Successfully Logged In'); })
          .catch((err) => {
            this.setState({refreshIcon:false});
            console.log('Error: ' + err.toString());
            this.setState({userMassge:"Invalid user name or paasword"});
          })
      }
     
      constructor(props) 
      {
        super(props);
        this.state =
        {
          email: "",
          password: "",
          userMassge: "",
          refreshIcon: false
        };
        this.login = this.login.bind(this);
      }
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
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
                  style={{width:'100%'}}
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
                  style={{width:'100%'}}
                  placeholder="Enter password"
                />
              </Form.Group><p />
              <label>
              
              
              </label><p />
               <Button  className="btn2" onClick={this.login} variant="outline-secondary">Log In</Button> 
              <div>
              { this.state.refreshIcon ? (  <i className="w3-jumbo w3-spin fa fa-refresh" ></i> ) : ( <div className="error-massage">{this.state.userMassge}</div> ) }
              </div>
            </Form>
          </div>

        );
      }
    }