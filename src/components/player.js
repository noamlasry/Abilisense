import React, { Component } from 'react';
import './player.css';
import { FaRegPlayCircle } from 'react-icons/fa';
import { TiMediaPlayOutline,TiMediaPlayReverseOutline,TiMediaPauseOutline,
    TiMediaRewind, TiMediaFastForward} from "react-icons/ti";
import { Row } from 'react-bootstrap';

class MediaPlayer  extends Component{
    render(){
       return(
        
       <div className="player">
          <h3>progress bar</h3>
          <Row className="mediaBtns" expand="lg">
            <h3> <TiMediaPlayReverseOutline /></h3>
            <h3> <TiMediaRewind /></h3>
            <h3> <TiMediaPauseOutline /></h3>
            <h3> <FaRegPlayCircle /></h3>
            <h3> <TiMediaFastForward /></h3>
            <h3> <TiMediaPlayOutline /></h3>
          </Row>
       </div>
    )
};
}

export default MediaPlayer ;