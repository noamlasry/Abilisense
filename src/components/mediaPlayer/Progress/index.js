import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ClickNHold from 'react-click-n-hold';



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
      progreesBarPosition:0,
      startDragAreaProgreesPosition:0
   
    };
    this.progressContainer = React.createRef();
  }
 


  onClick = ({ clientX }) => {
    
      const { onClick } = this.props; 
      
      const progressRef = this.progressContainer.current;
      const progress = (clientX - progressRef.getBoundingClientRect().left) / progressRef.clientWidth;
      this.setState({startDragAreaProgreesPosition:progress});
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
    
     if(this.state.dragArea)
     {

      let elem = document.querySelector('#progress');
      let rect = elem.getBoundingClientRect();
      var offset = e.screenX - rect.x;
   
      this.setState({progressWidth:offset});
     }
   };
   start = (e) =>{

    this.setState({startDrag:e.screenX});
    this.setState({progressWidth:0});
    this.setState({clickAppend:true});
    this.setState({dragArea:true});
    this.setState({progreesBarPosition:e.screenX});
	} 
    
  end = ()=>{this.setState({dragArea:false});}
  
  componentWillReceiveProps()
  {
    const {startDrag,progressWidth,startDragAreaProgreesPosition} = this.state;
    var {clickAppend} = this.state;
    const { percent } = this.props;
    if(percent === 0)
     this.setState({progressWidth:0});
    
     let elem = document.querySelector('#progress');
     let rect = elem.getBoundingClientRect();

     if(rect.x > startDrag+progressWidth && rect.x < startDrag+progressWidth+1 && progressWidth > 0 )
       this.props.sendProgressData(startDragAreaProgreesPosition);
    
     if(clickAppend)
     {
       this.setState({clickAppend:false});
       this.setState({progreesBarPosition:percent}); 
     }
  }
  temp = () =>{
    const {startDragAreaProgreesPosition} = this.state;
    console.log(startDragAreaProgreesPosition)
    this.props.sendProgressData(startDragAreaProgreesPosition);
  }

  render() {  
  
    const { percent, strokeWidth } = this.props;
    var {progressWidth} = this.state;
 
    return (
      <div>
  
      <ClickNHold
    
           time={2} // Time to keep pressing. Default is 2
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
       </div>
      </ClickNHold>

 </div>
    );
  }
}