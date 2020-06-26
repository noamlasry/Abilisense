import React, { Component }  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import Navigationbar from '../NavigationBar/NavigationBar'
import {ButtonToolbar, Button} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer";
import 'react-h5-audio-player/lib/styles.css';
import playlist from '../mediaPlayer/playlist';
import axios from 'axios';
import Annotator from "../annotator/annotator";
import { Storage } from "@aws-amplify/storage";

class MainPage extends Component {
   
    constructor(props) 
    {
      super(props);
    
      this.state = {
        index:0,
        src:'',
        cropFrom: "",
        cropTo: "",
        category: "baby",
        audioKey: [],
        keys:[],
        eTags:[],
        lastCrop: false,
  
        
      }  
    };
    
    audioTagHadler = () =>{
      console.log(this.state.cropFrom+" "
        +this.state.cropTo+" "
        + this.state.category+" "
        +this.state.audioKey[0].key+" "
        + this.state.lastCrop);
      axios({
        method: 'POST',
        url: 'https://mb8ew0clxb.execute-api.eu-west-1.amazonaws.com/v1',
        data:{
          cropFrom: this.state.cropFrom,
          cropTo: this.state.cropTo,
          category: this.state.category,
          key: this.state.audioKey[0].key,
          lastCrop: this.state.lastCrop
        } 
    })
      .then((response) => {
        console.log("aa");
        console.log(response.data.body)
        console.log("bb");
    //     console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
      });
    }

    setMusicIndex = (newIndex) => { this.setState({index:newIndex}); }
   
    getNextIndex = (nextIndex) => {this.setState({index:nextIndex});};
    
    componentWillMount(){ this.getS3Data();}

    async getS3Data ()
    {
      const audioKey = await Storage.list('')
      this.setState({ audioKey })
      
     let i;
     var lists = [],eTags = [],keys =[];
     for(i =0; i<audioKey.length; i++)
     {
       const audioUrl = await Storage.get(audioKey[i].key);
       const objectKey = audioKey[i].key;
       eTags.push(audioKey[i].eTag)
       if(objectKey[objectKey.indexOf('/')+1])
       {
         lists.push({url:audioUrl,title:objectKey});
         keys.push(objectKey);
       }
         
       
           
     }
       this.setState({lists});
       this.setState({eTags});
       this.setState({keys});
       
    }
    passCroppingParamaterToMain = (cropFrom,cropTo) =>{
       
        this.setState({cropFrom})
        this.setState({cropTo})

        console.log(this.state.cropFrom,this.state.cropTo);
    }
    shouldComponentUpdate(nextProps, nextState) { 
 
    if(this.state.index === nextState.index)
      return false;
    else
      return true;  
    }
  


    render(){
   
    return(
      
        <div>
     
           <Navigationbar userName={this.props.userName} />
        
           <LeftNav passMusicIndex={ this.setMusicIndex.bind(this)} index={this.props.index}/>

            <div className="middlenav">
            <h2 className="label" >Audio Player</h2>
              
            <MusicPlayer playlist={ playlist}   index={this.state.index} 
            updateIndex={this.setMusicIndex.bind(this)}
            passCroppingParamaterToMain={this.passCroppingParamaterToMain.bind(this)}
            />
       
            <Annotator src={playlist[this.state.index].url}  index={this.state.index}/> 
          

              <ButtonToolbar className="btnTool">
              <Button className="btn3" onClick={this.audioTagHadler}  variant="outline-primary">Audio tag</Button>
              </ButtonToolbar>
              
            <div className="btnQuality">
              <ButtonToolbar className="btnTool">
              <h5>Quality:</h5> 

                <Button className="btn-small" variant="outline-dark">Good</Button>
                <Button className="btn-small" variant="outline-dark">Bad</Button>
                </ButtonToolbar>
                <ButtonToolbar className="btnTool">
                <Button className="btn4" onClick={this.audioTagHadler} variant="outline-success">Submit</Button>
                <Button className="btn4" variant="outline-danger" type="submit">cancel</Button>
              </ButtonToolbar>
            </div>
        </div>
            <RightNav />
         </div>
    )
    }
}

export default MainPage;