import React, { Component } from "react";
import './rightNav.css';




class RightNav extends Component {







    render(){
        const {audiolist,index,audioObject} = this.props;


        var sizeInMB = (audioObject[index].size / (1024*1024)).toFixed(2);
        const file = <li style={{color:'red'}}>{audiolist[index].title.substr(0,audiolist[index].title.indexOf('/'))}</li>
        const name = <li style={{color:'red'}}>{audiolist[index].title.substring(audiolist[index].title.indexOf('/')+1,(audiolist[index].title.length)-4)} </li>
        const size = <li style={{color:'red'}}>{sizeInMB+" "}MB </li>
        const lastModified = <li style={{color:'red'}}>{audioObject[index].lastModified.toString()}</li>
        const type = 
            <li style={{color:'red'}}>
         {audiolist[index].title.substr(audiolist[index].title.indexOf('mp3'),audiolist[index].title.length-1)}
            </li> 
       
       
        return(

        <div className="rightnav">
           <h3 className="headline">File info</h3>
           <ul>
               
                <li >Folder:</li>
                {file}
                <br></br>
                <li >Audio Name:</li>
                {name}
                <br></br>
                <li >Type:</li>
                {type}
                <br></br>
                <li >Size:</li>
                {size}
                <br></br>
                <li >LastModified:</li>
                {lastModified}

             
               
               
              </ul>
        </div>
     )
 };
   
}

export default RightNav;