import React, { Component } from "react";
import './mainPage.css';
import  LeftNav  from "./leftNav";
import RightNav from "./rightNav";
import MiddleNav from "./middleNav";

class MainPage extends Component {
    render(){
        return(
        <div>   
            <LeftNav />
            <MiddleNav />
            <RightNav />
        </div>
     )
 };
   
}

export default MainPage;