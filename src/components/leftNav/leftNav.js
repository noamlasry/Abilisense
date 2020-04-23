import React, { Component } from "react";
import './leftNav.css';
import { MDBContainer } from "mdbreact";
import { Storage } from "@aws-amplify/storage";
// import { S3Image } from 'aws-amplify-react';

class LeftNav extends Component {
    state = {
      
        files: [],
      }
      async componentDidMount() {
        const files = await Storage.list('')
        console.log('files: ', files)
        this.setState({ files })
      }
    
    
    render(){
        const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };
        return(
            <div className="leftnav">
                <h3 className="h3" >Categories</h3>
            <MDBContainer>
                <div className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
                <ol className="ol" >
                {this.state.files.map((f,i) =>
                  <li className="li" key={i}>
                    {f.key}
                  </li>)}
                </ol>
                </div>
              </MDBContainer>
            </div>
        )
 };
   
}

export default LeftNav;