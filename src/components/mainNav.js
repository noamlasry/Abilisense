import React, {Component} from 'react';
import './mainNav.css';
import logo  from '../logo.png';

class MainNav extends Component{
    render(){
        return(
            <div className='nav'>
                <img src = {logo} className="Nav-logo" alt="logo"></img>
                <h1>Hi user</h1>
                <h2>subscribe</h2>
            </div>
            
        )
    };
}
export default MainNav;
