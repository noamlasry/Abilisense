import React, { Component } from "react";
import './mainPage.css';
import  LeftNav  from "./leftNav";
import RightNav from "./rightNav";
import MiddleNav from "./middleNav";

class MainPage extends Component {
    render(){
        return(
        <nav>   
            <LeftNav />
            <MiddleNav />
            {/* <div className="main">
               <h1>main page</h1>
            </div> */}
            <RightNav />
        </nav>
     )
 };
   
}

export default MainPage;