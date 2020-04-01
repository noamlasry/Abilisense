import React  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import MiddleNav from "../middleNav/middleNav";
import Navigationbar from '../NavigationBar/NavigationBar'



const MainPage = (props) => {
    


    return(
        <div>
           <Navigationbar userName={props.userName} />
            <LeftNav />
            <MiddleNav />
            <RightNav />
         </div>
    )
}

export default MainPage;