import React, { Component } from "react";
import './leftNav.css';
import  Category  from "../categories/category";

class LeftNav extends Component {
        
    render(){
        return(
            <div className="leftnav">
                <h3 className="h3" >Categories</h3>
                <Category />
            </div>
        )
 };
   
}

export default LeftNav;