import React, { Component } from "react";
import './leftNav.css';
import { MDBContainer } from "mdbreact";


class LeftNav extends Component {
   
    
    
    render(){
        const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };
        return(
            <div className="leftnav">
                <h3 className="h3" >Categories</h3>
            <MDBContainer>
                <div className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
                <ol className="ol" >
               
                </ol>
                </div>
              </MDBContainer>
            </div>
        )
 };
   
}

export default LeftNav;