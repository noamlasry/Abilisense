import React, { Component } from "react";
import './rightNav.css';
import { MDBBtnToolbar } from 'mdbreact';



class RightNav extends Component {
    render(){
        const {audiolist,index} = this.props;
      
        var name = <div style={{color:'red'}}>{audiolist[index].key.slice(0,audiolist[index].key.length-1)} </div>
        

        return(

        <div className="rightnav">
           <h3 className="headline">File info</h3>
           <ul>
               <MDBBtnToolbar>
                <li >Name:</li>
                {name}
               </MDBBtnToolbar>

               
               
              </ul>
        </div>
     )
 };
   
}

export default RightNav;