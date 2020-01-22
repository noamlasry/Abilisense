import React, { Component } from "react";
import './middleNav.css';
import Player from "./player";

class MiddleNav extends Component {
    render(){
      return(
        <div className="middlenav">
           <h1>audio player</h1>
            <Player />
        </div>
      )
 };
   
}

export default MiddleNav;