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
          <h3>
           <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </h3>
          <Row className="mediaBtns" expand="lg">
            <h3><button> <TiMediaPlayReverseOutline /></button></h3>
            <h3><button>  <TiMediaRewind /></button></h3>
            <h3><button>  <TiMediaPauseOutline /></button></h3>
            <h3><button>  <FaRegPlayCircle /></button></h3>
            <h3><button>  <TiMediaFastForward /></button></h3>
            <h3><button>  <TiMediaPlayOutline /></button></h3>
          </Row>
       </div>
    )
};
}

export default MediaPlayer ;