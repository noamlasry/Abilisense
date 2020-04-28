import React, { Component } from "react";
import './leftNav.css';
import { Storage } from "@aws-amplify/storage";
import {Accordion,Card,Button} from 'react-bootstrap';
import { MDBContainer } from "mdbreact";

class LeftNav extends Component {

  constructor(props) 
  {
    super(props);
    this.findSubCategory = this.findSubCategory.bind(this);
  }
    state = { 
        files:[],
        valid: [],
        unvalid:[],
        folder:[],
        textColor:'black'
      }

      async componentDidMount() {
        const files = await Storage.list('')
        this.setState({ files })
        this.findSubCategory();
      }
 
 
      findSubCategory() {
        var i;
        var folder = [];
        for(i = 0; i<this.state.files.length; i++)
        {
          var item = this.state.files[i].key;
          var keyNameEnd = item.slice(-1);
          if(keyNameEnd === '/')
            folder.push(this.state.files[i]);
        }
        this.setState({folder})
      }
      

    render(){
      const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };
        return(
         <div className="leftnav">
          <h3 className="h3" >Categories</h3>
          <br></br>
           <MDBContainer className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
            <Accordion >
            {this.state.folder.map((f,i) =>
             <Card>
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                 {f.key.slice(0,f.key.length-1)}
                 </Accordion.Toggle>
               </Card.Header>
                    {this.state.folder.map((f,k) =>
                    <Accordion.Collapse eventKey={i} className="li" key={k}>
                    <Card.Body> {f.key.slice(0,f.key.length-1)}</Card.Body>
                    </Accordion.Collapse>)}
             </Card>)}
           </Accordion>
          </MDBContainer>
         </div> 
        )
 };
   
}

export default LeftNav;