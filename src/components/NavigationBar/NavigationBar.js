import React  from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo  from '../../logo.png';
import './NavigationBar.css';
import fire from '../login/config/fire';

const Styles = styled.div`
  .navbar { background-color: #222; height: 10vh}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const Navigationbar = (props) => {function logout() {fire.auth().signOut(); }

  return (
   <div>   
               
    <Styles>
      <Navbar expand="lg">
        <img src = {logo} className="Nav-logo" alt="logo"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
 
          <Nav.Link >Hello:</Nav.Link>
          <Nav.Item><Nav.Link ><div className = "userName-text">{props.userName}</div></Nav.Link></Nav.Item>

  
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
         
           <Nav.Item><Nav.Link onClick = {logout}>LogOut</Nav.Link></Nav.Item>
          </Nav>
       </Navbar.Collapse>
     </Navbar>
   </Styles>
  </div>
  )
}

export default Navigationbar;