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
    this.getSubcategory = this.getSubcategory.bind(this);
  }
    state = { 
        files:[],
        folder:[],
        subCategory:[],
        textColor:'black',
        musicIndex:0,

      }

      componentDidMount() {
        this.findSubCategory();
      }
 
 
      async findSubCategory() {
        var file = this.props.audiolist;
        var i,folder = [],subCategory = [[]];
  
        for(i = 0; i<file.length; i++)
        {
          var objectKey = file[i].key;
    
          if(!objectKey[objectKey.indexOf('/')+1])
            folder.push(file[i].key);
            
        }
        this.setState({folder});
        for(i = 0; i<folder.length; i++)
        {
          subCategory[i] = await Storage.list(folder[i]);  
        
        }
        this.setState({subCategory});
      }

      getSubcategory(props)
      {

        const array = this.state.subCategory[props.index];
        var newArray = [], i = 0,index = 0;
      
        if(array != null)
        {
          for(i = 1; i<array.length; i++)
          {
            var slash = array[i].key.indexOf('/')+1;
            var keyName = array[i].key;
            newArray.push(keyName.substring(slash,keyName.length));
           ++index   
           
          }
      
            var divElement = newArray.map((f,i) => 
            <Accordion.Collapse eventKey={props.index} className="li" key={++index} onClick={() => this.props.passMusicIndex(i)}>
            <Card.Body>{f} </Card.Body>
            </Accordion.Collapse>);

          
         
        }
        
        else
        divElement = '';
     
        return divElement;
        
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
             <Card key={i}>
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                 {f.slice(0,f.length-1)}
                 </Accordion.Toggle>
               </Card.Header>

                 <this.getSubcategory index = {i} />   
                   
             </Card>)}
           </Accordion>
          </MDBContainer>
         </div> 
        )
 };
   
}

export default LeftNav;