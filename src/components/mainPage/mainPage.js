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
   
    constructor(props) {
      super(props);
    
      this.state = {
       
        index:0,
        x:5,
        src:'',
        temp: "M 5 0 L 5 100",
        cropFrom: "",
        cropTo: "",
        category: "",
      }
      
      };
    
  
  
    setMusicIndex = (newIndex) => {
        this.setState({index:newIndex});
      
    }
   
   
    audioTagHadler = () =>{
      axios.post('https://x5jg5ka5ci.execute-api.eu-west-1.amazonaws.com/v1/postrequest')
      .then((response) => {
        console.log(response)
      });
    }
    sendToApi(){
      const cropFrom = document.querySelector('#cropFrom').value;
      const cropTo = document.querySelector('#cropTo').value;
      const category = document.querySelector('#category').value;
    }
    

    getNextIndex = (nextIndex) => {
    this.setState({index:nextIndex});
  
  };
  changeBGColor = () => {
    var cols = document.getElementsByClassName('vl');
    var i;
    for(i = 0; i < cols.length; i++) {
      cols[i].style.backgroundColor = 'blue';
    }
  }


 
    render(){
    
    return(
        <div>
          
      
           <Navigationbar userName={this.props.userName} />

           <LeftNav passMusicIndex={ this.setMusicIndex.bind(this)} index={this.props.index}/>

            <div className="middlenav">
            <h2 className="label">Audio Player</h2>
        
         
            <MusicPlayer playlist={ playlist}   index={this.state.index} updateIndex={this.setMusicIndex.bind(this)}/>
                 
          
            <Annotator src={playlist[this.state.index].url}  index={this.state.index}/> 
          
              <ButtonToolbar className="btnTool">
              <Button className="btn3" onClick={this.audioTagHadler}  variant="outline-primary">Audio tag</Button>
              </ButtonToolbar>
              
            <div className="btnQuality">
              <ButtonToolbar className="btnTool">
              <h5>Quality:</h5> 

                <Button className="btn-small" variant="outline-dark">Good</Button>
                <Button className="btn-small" variant="outline-dark">Bad</Button>
                </ButtonToolbar>
                <ButtonToolbar className="btnTool">
                <Button className="btn4" onClick={this.audioTagHadler} variant="outline-success">Submit</Button>
                <Button className="btn4" variant="outline-danger" type="submit">cancel</Button>
              </ButtonToolbar>
            </div>
        </div>
            <RightNav />
         </div>
    )
    }
}

export default MainPage;