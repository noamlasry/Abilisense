import React, { Component } from "react";
import './leftNav.css';
import  Song  from "./song";

class LeftNav extends Component {
        
    render(){
        return(
            <div className="leftnav">
                <h1 className="headline">Audio files</h1>
                <Song />
            </div>
        )
 };
   
}

export default LeftNav;