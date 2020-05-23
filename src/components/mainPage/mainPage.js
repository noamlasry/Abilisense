import React, { Component }  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import Navigationbar from '../NavigationBar/NavigationBar'
import {ButtonToolbar, Button} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer";
import 'react-h5-audio-player/lib/styles.css';
import playlist from '../mediaPlayer/playlist';
import axios from 'axios';
import Annotator from "../annotator/annotator";

class MainPage extends Component {
    state = {
      index:0,
      src:''
    }
  
    setMusicIndex = (newIndex) => {
        this.setState({index:newIndex});
      
    }
   
    componentDidMount(){
      axios.get('https://api.github.com/users/mapbox')
      .then((response) => {
     
      });
    }
    getNextIndex = (nextIndex) => {
    this.setState({index:nextIndex});
  
  };


 
    render(){
   
    return(
        <div>
           <Navigationbar userName={this.props.userName} />

           <LeftNav passMusicIndex={ this.setMusicIndex.bind(this)} index={this.props.index}/>

            <div className="middlenav">
            <h2 className="label">Audio Player</h2>
            <MusicPlayer playlist={ playlist}   index={this.state.index} updateIndex={this.getNextIndex.bind(this)} />
            <Annotator src={playlist[this.state.index].url}  index={this.state.index}/>
              <ButtonToolbar className="btnTool">
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
                <Button className="btn" variant="outline-primary">Audio tag</Button>
              </ButtonToolbar>
            <div className="btnQuality">
              <ButtonToolbar className="btnTool">>
              <h5>Quality:</h5>

                <Button className="btn-small" variant="outline-dark" >Good</Button>
                <Button className="btn-small" variant="outline-dark">Bad</Button>
                </ButtonToolbar>
                <ButtonToolbar className="btnTool">
                <Button className="btn-small1" variant="outline-success" >Submit</Button>
                <Button className="btn-small1" variant="outline-danger">cancel</Button>
              </ButtonToolbar>
            </div>
        </div>
            <RightNav />
         </div>
    )
    }
}

export default MainPage;