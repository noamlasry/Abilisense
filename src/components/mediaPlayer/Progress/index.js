import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Draggable from 'react-draggable'


export default class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number
  };

  static defaultProps = {
    percent: 0,
    strokeColor: '#9b9b9b',
    strokeWidth: 18.5,
    leftPosition:22,
    
  };

  constructor() {
    super();
    this.state ={
      progressParamater:0,
      positionX:'20px',
      progressWidth:1.5
    };
    this.progressContainer = React.createRef();
  }
 

  onClick = ({ clientX }) => {
      const { onClick } = this.props; 
      const progressRef = this.progressContainer.current;
      const progress = (clientX - progressRef.getBoundingClientRect().left) / progressRef.clientWidth;
      onClick(progress);
  };

  onKeyDown = ({ keyCode }) => {
    const { percent, onClick } = this.props;
    switch (keyCode) {
      case 37:
      case 40:
        onClick(Math.max(percent - 0.05, 0));
        break;
      case 38:
      case 39:
        onClick(Math.min(percent + 0.05, 0.9999));
        break;
      default:
        break;
    }
  };
  shouldComponentUpdate(){return true;}

  handleDrag = (e) =>
  {
    console.log(e);
    if(e.movementX > 0)
      this.setState({progressWidth:this.state.progressWidth+0.9},console.log(""));
    else if(e.movementX < 0)
      this.setState({progressWidth:this.state.progressWidth-0.9},console.log(""));
  };

  setProgressPosition = (e) =>{this.setState({positionX:e.screenX}); };
  
 
  render() {  
    const { percent, strokeWidth } = this.props;
    const {progressWidth} = this.state;
   
    return (
      <div>
        <div ref={this.progressContainer}role="progressbar"className="progress"style={{ height:`${strokeWidth}%`}}>
        <div 
          className="progress-inner" 
          style={{ left: `${percent * 100}%`, backgroundColor: 'black',position:'absolute' ,width:`${progressWidth}%`}}/>
        </div>
   
        <Draggable
          axis="x" handle=".handle" defaultPosition={{x: 0, y: 0}}
          position={null} grid={[25, 25]} scale={4}
          onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
          <div>
          <div className="handle">
            <div style={{ position: 'absolute',
                width: '3px',left: `${(percent * 100)+1}%`,
                top: '59px',height:'120px',
                backgroundColor: 'black',cursor: 'e-resize'}} 
                onClick={this.setProgressPosition}/>
            </div>  
          </div>
        </Draggable>
  
        <div
          ref={this.progressContainer} role="progressbar" tabIndex="-1" className="progress"
          style={{ height: `${strokeWidth}%` }} onClick={this.onClick} onKeyDown={this.onKeyDown} draggable={true}>
        
          <div 
           className="progress-inner" 
           style={{ left: `${percent * 100}%`, backgroundColor: 'black',position:'absolute' ,width:'10px'}}/>
      
        </div>
    
     </div>
    );
  }
}