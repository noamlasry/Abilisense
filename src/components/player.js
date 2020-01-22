import React, { Component } from 'react';
import './player.css';

class Player extends Component{
    render(){
       return(
       <div className="player">
           <i className="far fa-stop-circle"></i>
           <i className="fas fa-fast-backward"></i>
           <i className="far fa-stop-circle"></i>
       </div>
    )
};
}

export default Player;