import React, { Component } from "react";
import './middleNav.css';
import {ButtonToolbar, Button} from "react-bootstrap";
// eslint-disable-next-line
import Player from "../mediaPlayer/player";
import MusicPlayer from "../mediaPlayer/MusicPlayer"
import playlist from '../mediaPlayer/playlist';

//import aws, { S3 } from "aws-sdk";

const aws = require('aws-sdk');
//const config = require('./config.json');

(async function(){
  try{

  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: 'AKIAQJCNFVG5R6IQR7FP',
    secretAccessKey: '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',
    region: 'eu-west-1'
  });

  const s3 = new aws.S3();
  const response = await s3.listObjectsV2({
    Bucket: 'abilisense-bucket'
  }).promise();
  
  console.log("111111111111111111111111111111111111111111")
  console.log(response);
  console.log("22222222222222222222222222222222222222222")

} catch (e) {
  console.log('our error',e);
}
})();

debugger;



class MiddleNav extends Component {
    render(){
      
      return(
        <div className="middlenav">
            <h2 className="label">Audio Editor</h2>
            <MusicPlayer playlist={playlist} />
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