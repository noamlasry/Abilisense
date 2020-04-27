import React, { Component } from "react";
import './leftNav.css';
import { Storage } from "@aws-amplify/storage";
import {Accordion,Card,Button} from 'react-bootstrap';

class LeftNav extends Component {

  constructor(props) 
  {
    super(props);
  
    this.findSubCategory = this.findSubCategory.bind(this);
    this.validAndUnvalid = this.validAndUnvalid.bind(this);

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
 
      validAndUnvalid()
      {

      }
      
      findSubCategory() {
        var i;
        var folder = [];
        for(i = 0; i<this.state.files.length; i++)
        {
         
          var item = this.state.files[i].key;
          var keyNameEnd = item.slice(-1);
          var KeyName = item.slice(0,item.length-1);
          if(keyNameEnd === '/')
            folder.push(this.state.files[i]);
          
            
         
        }
        this.setState({folder})
      }
      

    render(){
  
        return(
          <div className="leftnav">
            <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Valid
      </Accordion.Toggle>
    </Card.Header>
       {this.state.folder.map((f,i) =>
                 <div className="li" key={i}>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body> {f.key.slice(0,f.key.length-1)}</Card.Body>
                    </Accordion.Collapse>
                </div>)}
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Unvalid
      </Accordion.Toggle>
    </Card.Header>
    {this.state.folder.map((f,i) =>
                 <div className="li" key={i}>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body> {f.key.slice(0,f.key.length-1)}</Card.Body>
                    </Accordion.Collapse>
                </div>)}
  </Card>
</Accordion>

          </div>
        )
 };
   
}

export default LeftNav;