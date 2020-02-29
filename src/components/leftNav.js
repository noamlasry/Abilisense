import React, { Component } from "react";
import './leftNav.css';
import  Category  from "./categories/category";

class LeftNav extends Component {
        
    render(){
        return(
            <div className="leftnav">
                <Category />
            </div>
        )
 };
   
}

export default LeftNav;