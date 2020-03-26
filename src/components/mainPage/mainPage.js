import React, { Component } from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import MiddleNav from "../middleNav/middleNav";

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