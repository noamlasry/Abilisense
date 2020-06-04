import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Draggable from 'react-draggable'
import ClickNHold from 'react-click-n-hold';


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

    
  };

  constructor() {
    super();
    this.state ={
      progressParamater:0,
      dragArea: false,
      progressWidth:0
    };
    this.progressContainer = React.createRef();
  }
 

  onClick = ({ clientX }) => {
    console.log(clientX);
      const { onClick } = this.props; 
      const progressRef = this.progressContainer.current;
      const progress = (clientX - progressRef.getBoundingClientRect().left) / progressRef.clientWidth;
      onClick(progress);
  };

  onKeyDown = ({ keyCode }) => {
    console.log(keyCode);
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


   //====================================
   handleDrag = (e) =>
   {
     console.log(e);
     console.log(e.movementX);
     if(this.state.dragArea)
     {
      if(e.movementX > 0)
       this.setState({progressWidth:this.state.progressWidth+0.5},console.log("progressWidth: "+this.state.progressWidth));
      else if(e.movementX < 0)
       this.setState({progressWidth:this.state.progressWidth-0.5},console.log(""));
     }
   };
   start = (e) =>{
    this.setState({dragArea:true});
    console.log('START:'); 
    console.log(e);
	} 
    
	end = (e, enough)=>{
		console.log('END');
        console.log(enough ? 'Click released after enough time': 'Click released too soon:');   
        console.log(e);    
        this.setState({dragArea:false});     
	} 
    
	clickNHold(e){
    console.log('CLICK AND HOLD:');  
    console.log(e);
	} 
   //=====================================
 
  render() {  
    const { percent, strokeWidth } = this.props;
    const {progressWidth} = this.state;
   
    return (
      <div>
        
			 
      
  
     <ClickNHold
    
     time={2} // Time to keep pressing. Default is 2
     onStart={this.start} // Start callback
     onClickNHold={this.clickNHold} //Timeout callback
     onEnd={this.end} > 
     
       <div>
       <div
          onPointerMove={this.handleDrag}
          ref={this.progressContainer} role="progressbar" tabIndex="-1" className="progress"
          style={{ height: `${strokeWidth}%` }} onMouseDown ={this.onClick} onKeyDown={this.onKeyDown} >
        
          <div 
           className="progress-inner" 
       
           style={{ left: `${percent * 100}%`, backgroundColor: 'black',position:'absolute' ,width:'10px'}}/>
                <div 
           className="progress-inner" 
       
           style={{ left: `${percent * 100}%`, backgroundColor: 'blue',position:'absolute' ,width:`${progressWidth}%`}}/>
      
       </div>
       </div>
      	</ClickNHold>

 </div>
    );
  }
}