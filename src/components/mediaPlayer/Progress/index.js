import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ClickNHold from 'react-click-n-hold';
import {ButtonToolbar} from "react-bootstrap";



export default class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number
  };

  static defaultProps = {
    percent: 0,
    strokeColor: '##081C24',
    strokeWidth: 18.5,
    
  };

  constructor() {
    super();
    this.state ={
      progressParamater:0,
      dragArea: false,
      progressWidth:0,
      clickAppend:false,
      startDrag:0,
      cropFrom:'00:00:00',
      cropTo:'00:00:00',
      totalCropInsec:'00:00:00',
      progreesBarPosition:0,
      startDragAreaProgreesPosition:0,
      endDragAreaPosition:0
   
    };
    this.progressContainer = React.createRef();
  }
 


  onClick = ({ clientX }) => {
      const { onClick ,audioTotalTime} = this.props;    
      const progressRef = this.progressContainer.current;
      const progress = (clientX - progressRef.getBoundingClientRect().left) / progressRef.clientWidth;
      this.setState({startDragAreaProgreesPosition:progress});
      this.setState({cropFrom:new Date(audioTotalTime*progress*1000).toISOString().substr(11,8)})
      
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
    
    const {audioTotalTime} = this.props;
    const {progressWidth} = this.state;
    
     if(this.state.dragArea)
     {

      let elem = document.querySelector('#progress');
      let rect = elem.getBoundingClientRect();
      var offset = e.screenX - rect.x;
      const progressRef = this.progressContainer.current;
      const progress = (e.screenX - progressRef.getBoundingClientRect().left) / progressRef.clientWidth;
      this.setState({endDragAreaPosition:progress})
      if(offset > 3)
      {
        this.setState({progressWidth:offset});
        this.setState({totalCropInsec:new Date(audioTotalTime*(progressWidth/510)*1000).toISOString().substr(11,8)});
        this.setState({cropTo:new Date(progress*audioTotalTime*1000).toISOString().substr(11,8)})
      }

     }
   };
   start = (e) =>{
  
    this.setState({startDrag:e.screenX});
    this.setState({progressWidth:0});
    this.setState({cropTo:'00:00:00'});
    this.setState({clickAppend:true});
    this.setState({dragArea:true});
    this.setState({progreesBarPosition:e.screenX});
	} 
    
  end = ()=>{
    this.setState({dragArea:false});}
  
  componentWillReceiveProps()
  {
    
    const {progressWidth,startDragAreaProgreesPosition,endDragAreaPosition} = this.state;
    var {clickAppend} = this.state;
    const { percent,audioTotalTime } = this.props;

    if(percent === 0)
    {
      this.setState({cropTo:'00:00:00'});
      this.setState({cropFrom:'00:00:00'});
      this.setState({progressWidth:0});
    }
     

    var ccurrentProgress = new Date(audioTotalTime*percent*1000).toISOString().substr(11,8);
    var endDragProgress = new Date(audioTotalTime*endDragAreaPosition*1000).toISOString().substr(11,8);

     if(ccurrentProgress === endDragProgress && progressWidth > 3)
      this.props.sendProgressData(startDragAreaProgreesPosition);

     if(clickAppend)
     {
       this.setState({clickAppend:false});
       this.setState({progreesBarPosition:percent}); 
     }
  }


  render() {  
  
    const { percent, strokeWidth ,audioTotalTime} = this.props;
    var {progressWidth} = this.state;
    const displayTime = new Date(audioTotalTime*percent*1000).toISOString().substr(11,8);

    return (
      <div>
  
      <ClickNHold
           onClickNHold={this.clickNHold} //Timeout callback
           time={1} // Time to keep pressing. Default is 2
           onStart={this.start} // Start callback
           onEnd={this.end} >      
        <div>
          <div
            onPointerMove={this.handleDrag}
            ref={this.progressContainer} role="progressbar" tabIndex="-1" className="progress"
            style={{ height: `${strokeWidth}%` }} onMouseDown ={this.onClick} onKeyDown={this.onKeyDown} >
        
            <div 
              className="progress-inner" 
              id="progress"
              style={{ left: `${percent * 100}%`, backgroundColor: 'black',position:'absolute' ,width:'2px',opacity:1}}/>
            <div 
            
              className="progress-inner" 
              style={{ left: `${this.state.progreesBarPosition*100}%`, backgroundColor: 'blue',position:'absolute' ,width:`${progressWidth}px`,opacity:0.2, cursor: 'ew-resize'}}/>
          </div>
        
          <div className="time" >{displayTime}</div>
          
       </div>
      
      </ClickNHold>
      <div>
       
      </div>
      <ButtonToolbar className="cropping">
        <div style={{color:'red'}}>Crop From:</div>
        <div>{"  "+this.state.cropFrom+"  "}</div>
        <div style={{color:'red'}}>To:</div>
        <div>{" "+this.state.cropTo}</div>
      </ButtonToolbar>

 </div>
    );
  }
}