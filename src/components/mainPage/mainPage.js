import React, { Component }  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import MiddleNav from "../middleNav/middleNav";
import Navigationbar from '../NavigationBar/NavigationBar'
import {ButtonToolbar, Button} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer";
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import playlist from '../mediaPlayer/playlist';





class MainPage extends Component {

    constructor(props){
        super(props);
    }
    state = {
      title:'placeholder title'
    }
  
    changeTheWorld = (newTitle) => {
      console.log("clicked");
        this.setState({title:newTitle});
    }

 
    render(){
    return(
        <div>
           <Navigationbar userName={this.props.userName} />

           <LeftNav doWhatever={ this.changeTheWorld.bind(this)} title={this.props.title}/>

            <div className="middlenav">
            <h2 className="label">Audio Player</h2>
            <MusicPlayer playlist={ playlist}   title={this.state.title}/>
              <ButtonToolbar className="btnTool">
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
              </ButtonToolbar>
              <ButtonToolbar className="btnQuality">
                <h5>Quality:</h5>
                <Button variant="outline-dark" >Good</Button>
                <Button variant="outline-dark">Bad</Button>
              </ButtonToolbar>
              <ButtonToolbar className="btnSub">
                <Button size="lg" variant="outline-success" >Submit</Button>
                <Button size="lg" variant="outline-danger">cancel</Button>
              </ButtonToolbar>
        </div>
            <RightNav />
         </div>
    )
    }
}

export default MainPage;