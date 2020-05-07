import React, { Component } from "react";
import './middleNav.css';
import {ButtonToolbar, Button} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer"
import { Storage } from "@aws-amplify/storage";



class MiddleNav extends Component {
  state = {     
    files: [],
    lists:[ { }  ]

  }
   componentDidMount() {
 
    
 
    this.state.lists.push({url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',title:'song-1'});   
    this.state.lists.push({url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',title:'song-2'});   

      this.state.lists.shift();
  }
 
    render(){
      
      return(
        <div className="middlenav">
            <h2 className="label">Audio Player</h2>
            <MusicPlayer playlist={ this.state.lists}  autoPlay={true}/>
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
      )
 };
 
}

export default MiddleNav;