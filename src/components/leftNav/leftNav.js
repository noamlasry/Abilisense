import React, { Component } from "react";
import './leftNav.css';
import { Storage } from "@aws-amplify/storage";
import {Accordion,Card,Button} from 'react-bootstrap';

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
  
        return(
            <Accordion className="leftnav">
             <Card>
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey="0">
                 Valid
                 </Accordion.Toggle>
               </Card.Header>
                    {this.state.folder.map((f,i) =>
                    <Accordion.Collapse eventKey="0" className="li" key={i}>
                    <Card.Body> {f.key.slice(0,f.key.length-1)}</Card.Body>
                    </Accordion.Collapse>)}
             </Card>
             <Card>
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey="1">
                 Unvalid
                 </Accordion.Toggle>
               </Card.Header>
                   {this.state.folder.map((f,i) =>
                   <Accordion.Collapse eventKey="1" className="li" key={i}>
                   <Card.Body> {f.key.slice(0,f.key.length-1)}</Card.Body>
                   </Accordion.Collapse>)}
             </Card>
           </Accordion>
        )
 };
   
}

export default LeftNav;