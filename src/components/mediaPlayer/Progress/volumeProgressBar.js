import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';


export default class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number
  };

  static defaultProps = {
    percent: 0,
    strokeColor: '#9b9b9b',
    strokeWidth: 18.5
  };

  constructor() {
    super();
    this.state ={
      progressParamater:0
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


  render() {
 
    const { percent, strokeWidth } = this.props;
    return (
      <div>
        
      <div
        ref={this.progressContainer}
        role="progressbar"
        tabIndex="-1"
        className="progress"
        style={{ height: `${strokeWidth}%`,cursor: 'pointer'}}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        draggable={true}
      >
        
        <div className="progress-inner" style={{ width: `${percent * 100}%`, backgroundColor: 'blue',cursor: 'pointer' }}/>
      
      </div>
    
     </div>
    );
  }
}