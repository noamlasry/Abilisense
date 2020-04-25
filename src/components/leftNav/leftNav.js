import React, { Component } from "react";
import './leftNav.css';
import { MDBContainer } from "mdbreact";
import { Storage } from "@aws-amplify/storage";


class LeftNav extends Component {

  constructor(props) 
  {
    super(props);
  
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

    state = {
      
        files: [],
        textColor:'black'
      }
      async componentDidMount() {
        const files = await Storage.list('')
        this.setState({ files })
      }
      
      mouseOver() {
        this.setState({textColor:"red"});
      }
      
      mouseOut() {
        this.setState({textColor:'black'});
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
                  <li style={{ color: this.state.textColor }} className="li" key={i} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
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