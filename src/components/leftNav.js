import React, { Component } from "react";
import './leftNav.css';
import  Song  from "./song";

class LeftNav extends Component {
        
    render(){
        return(
            <div className="leftnav">
                
                <Song />
            </div>
        )
 };
   
}

export default LeftNav;