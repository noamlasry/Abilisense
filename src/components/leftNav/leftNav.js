import React, { Component } from "react";
import './leftNav.css';
import {Accordion,Card,Button} from 'react-bootstrap';
import { MDBContainer } from "mdbreact";




class LeftNav extends Component {

 
 
    state = { 
        files:[],
        folder:[],
        subCategory:[],
        subPlayList:[{}],
        showComponent:false
      }


 
   

     
    
      

    render(){
      const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };
        return(
         <div className="leftnav">
          <h3 className="h3" >Categories</h3>
         
          <br></br>
           <MDBContainer className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
            <Accordion >
            
             <Card key='1'>
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey='1'>
                remove category temporary to avoid aws request
                 </Accordion.Toggle>
               </Card.Header>

                 
                   
             </Card>
           </Accordion>
          </MDBContainer>
         
         </div> 
        )
 };
   
}

export default LeftNav;