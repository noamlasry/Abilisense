import React  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import MiddleNav from "../middleNav/middleNav";
import Navigationbar from '../navigationbar/navigationbar'



const MainPage = (props) => {
    


    return(
        <div>
           <Navigationbar title={props.title} />
            <LeftNav />
            <MiddleNav />
            <RightNav />
         </div>
    )
}

export default MainPage;