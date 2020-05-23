import React, { Component } from "react";
import './leftNav.css';
import {Accordion,Card,Button} from 'react-bootstrap';
import { MDBContainer } from "mdbreact";
import playlist from '../mediaPlayer/playlist';



class LeftNav extends Component {
   state = { 
        files:[],
        folder:[],
        subCategory:[],
        subPlayList:[{}],
        showComponent:false,
      }
    render(){
      const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };
        return(
         <div className="leftnav">
          <h3 className="h3" >Categories</h3>
          <br></br>
           <MDBContainer className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
            <Accordion > 
            {playlist.map((f,i) =>
             <Card key={i}>
               <Card.Header>
                 <Accordion.Toggle as={Button} className="btn1" variant="link" eventKey={i} onClick={() => this.props.passMusicIndex(i)} >
                 {f.title}
                 </Accordion.Toggle>
               </Card.Header>        
             </Card>)}
           </Accordion>
          </MDBContainer>
         
         </div> 
        
        )
 };
   
}

export default LeftNav;