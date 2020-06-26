import React, { Component }  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import Navigationbar from '../NavigationBar/NavigationBar'
import {Button} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer";
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import Annotator from "../annotator/annotator";
import { Storage } from "@aws-amplify/storage";
import { MDBBtnToolbar } from 'mdbreact';


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
        audioObject:[],
        lastCrop: false,
  
        
      }  
    };
    
    audioTagHadler = () =>{
    const data = {
      cropFrom: this.state.cropFrom,
      cropTo: this.state.cropTo,
      category: this.state.category,
      key: this.state.key,
      lastCrop: this.state.lastCrop,
    };
      axios.post('https://x5jg5ka5ci.execute-api.eu-west-1.amazonaws.com/v1/postrequest',{data})
      .then((response) => {
        console.log(response)
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
     var lists = [],eTags = [],keys =[],audioObject = [];
     for(i =0; i<audioKey.length; i++)
     {
       const audioUrl = await Storage.get(audioKey[i].key);
       const objectKey = audioKey[i].key;
       eTags.push(audioKey[i].eTag)
       if(objectKey[objectKey.indexOf('/')+1])
       {
         audioObject.push(audioKey[i])
         lists.push({url:audioUrl,title:objectKey});
         keys.push(objectKey);
       }
     }
       this.setState({audioObject});
       this.setState({lists});
       this.setState({eTags});
       this.setState({keys});
       
    }
    passCroppingParamaterToMain = (cropFrom,cropTo) =>{
       
        this.setState({cropFrom})
        this.setState({cropTo})

       
    }
    shouldComponentUpdate(nextProps, nextState) { 
 
    if(this.state.index === nextState.index && this.state.lists)
      return false;
    else
      return true;  
    }

   


    render(){
    const {lists,audioKey,audioObject} = this.state;
  
    return(
     <div>
       {lists &&
       <div>
           <Navigationbar userName={this.props.userName} />
           
           <LeftNav passMusicIndex={ this.setMusicIndex.bind(this)} 
            index={this.props.index} 
            playlist={ lists}
            audiolist={audioKey}/>

           <div className="middlenav">
              <h2  >Audio Player</h2>
              
              <MusicPlayer playlist={ lists}   index={this.state.index} 
                updateIndex={this.setMusicIndex.bind(this)}
                passCroppingParamaterToMain={this.passCroppingParamaterToMain.bind(this)}/>
       
              <Annotator src={lists[this.state.index].url}  /> 
        
             
                <Button className="btn3" onClick={this.audioTagHadler}  variant="outline-primary">Audio tag</Button>
                <MDBBtnToolbar className="qualityButtons">
                  <Button className="goodButton" variant="outline-dark">Good</Button>
                  <Button className="badButton" variant="outline-dark">Bad</Button>
                </MDBBtnToolbar>
                <MDBBtnToolbar className="formButtons">
                  <Button className="goodButton" onClick={this.audioTagHadler} variant="outline-success">Submit</Button>
                  <Button  className="badButton" variant="outline-danger" type="submit">Cancel</Button>
                </MDBBtnToolbar>
               
              
           </div>

              <RightNav audiolist={lists} index={this.state.index} audioObject={audioObject}/>
        </div>}
      </div>
    )
    }
}

export default MainPage;