import React, { Component } from "react";
import './rightNav.css';
import Song from "./song";

class RightNav extends Component {
    render(){
        return(

        <div className="rightnav">
           <h3 className="headline">File info</h3>
            <Song />
        </div>
     )
 };
   
}

export default RightNav;