import React, { Component } from "react";
import './middleNav.css';
import {ButtonToolbar, Button} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer"
import { Storage } from "@aws-amplify/storage";


class MiddleNav extends Component {
  state = {     
    files: [],
    list:[
      {
        url:'',
        title:'start', 
      }
    ]

  }
  async componentDidMount() {
    const files = await Storage.list('')
    this.setState({ files })
    
   let i;
   for(i =0; i<3; i++)
   {
     const audioUrl = await Storage.get(files[i].key);
     const objectKey = files[i].key;
     this.state.list.push({url:audioUrl,title:objectKey});
   }

  }

    render(){
      
      return(
        <div className="middlenav">
            <h2 className="label">Audio Player </h2>
            <MusicPlayer playlist={ this.state.list} />
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