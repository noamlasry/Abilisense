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
        textColor:'black'
      }

      async componentDidMount() {
        const files = await Storage.list('')
        this.setState({ files })
        this.findSubCategory();
      }
 
 
      async findSubCategory() {
        var i;
        var folder = [];
        var subCategory = [[]];
        for(i = 0; i<this.state.files.length; i++)
        {
          var item = this.state.files[i].key;
          var keyNameEnd = item.slice(-1);
          if(keyNameEnd === '/')
            folder.push(this.state.files[i]);
        }
        this.setState({folder});

        for(i = 0; i<this.state.folder.length; i++)
        {
          subCategory[i] = await Storage.list(folder[i].key);  
  
        }
        this.setState({subCategory});
    
    //    console.log(this.state.subCategory);
     
      }

      getSubcategory(props)
      {
        const array = this.state.subCategory[props.index];
        console.log("subcategory");
        console.log(array);
        if(array != null)
        {
          var temp = array.map((f,k) =>
          <Accordion.Collapse eventKey={props.index} className="li" key={k}>
          <Card.Body>{f.key.slice(0,f.key.length-1)} </Card.Body>
          </Accordion.Collapse>);
        }
        else
         temp = '';
     
        return (
          temp
        );
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
                 {f.key.slice(0,f.key.length-1)}
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