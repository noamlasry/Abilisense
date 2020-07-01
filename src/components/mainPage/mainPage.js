import React, { Component,useState  }  from "react";
import './mainPage.css';
import  LeftNav  from "../leftNav/leftNav";
import RightNav from "../rightNav/rightNav";
import Navigationbar from '../NavigationBar/NavigationBar'
import {Button,Dropdown,FormControl} from "react-bootstrap";
import MusicPlayer from "../mediaPlayer/MusicPlayer";
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import Annotator from "../annotator/annotator";
import { Storage } from "@aws-amplify/storage";
import { MDBBtnToolbar } from 'mdbreact';

 // ====== dropDown category area =====================================================================//
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
  style={{position:'absolute',top:'64%',left:'26.2%',width:'56.9%'}}
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </Button>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

 // ==================================================================================================//



class MainPage extends Component {
   
    constructor(props) 
    {
      super(props);
    
      this.state = {
        index:0,
        src:'',
        cropFrom: "",
        cropTo: "",
        category: 'Unvalid',
        audioKey: [],
        keys:[],
        eTags:[],
        fileCategory:[],
        audioObject:[],
        lastCrop: false,
        audioLength:'click play to display time',
        responceAnnotator:true,
       
    
  
        
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

    setMusicIndex = (newIndex) => { 
   
      this.setState({responceAnnotator:true,index:newIndex}); 
    }
   
    getNextIndex = (nextIndex) => {this.setState({index:nextIndex});};
    
    componentWillMount(){ 
      this.getS3Data();}

    async getS3Data ()
    {
      const audioKey = await Storage.list('')
      this.setState({ audioKey })
    
     let i;
     var lists = [],eTags = [],keys =[],audioObject = [],fileCategory =[];
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
       if(!objectKey[objectKey.indexOf('/')+1])
       fileCategory.push(objectKey.substr(0,objectKey.indexOf('/')));
    

 
   
     }
  
       this.setState({fileCategory})
       this.setState({audioObject});
       this.setState({lists});
       this.setState({eTags});
       this.setState({keys});
       
    }
    passCroppingParamaterToMain = (cropFrom,cropTo) =>{
       
        this.setState({cropFrom})
        this.setState({cropTo})

       
    }
    
    shouldComponentUpdate(nextProps, nextState) 
    { 
   
       if(this.state.category !== nextState.category)
        return true;
          
       else if(this.state.index === nextState.index && this.state.lists)
         return false;
       else
       {
         return true;  
       }
        
    }

    audioDuration = (duration) =>{
      this.setState({audioLength:duration});
      
    };

    selectedCategoryName = (name) =>{
      this.setState({category:name,responceAnnotator:false})
   
    }



    render(){
    const {lists,audioKey,audioObject,audioLength,category,responceAnnotator,index} = this.state;
    const scrollContainerStyle = { width: "100%", maxHeight: "40vh" };

    return(
     <div>
       {lists && 
       <div >
           <Navigationbar userName={this.props.userName} />
           
           <LeftNav passMusicIndex={ this.setMusicIndex.bind(this)} 
            index={this.props.index} 
            playlist={ lists}
            audiolist={audioKey}/>

           <div className="middlenav">
              <h2  >Audio Player</h2>
              
              <MusicPlayer playlist={ lists}   index={this.state.index} 
                passAudioDuration={this.audioDuration.bind(this)} updateIndex={this.setMusicIndex.bind(this)}
                passCroppingParamaterToMain={this.passCroppingParamaterToMain.bind(this)}/>
             
              <Annotator src={lists[this.state.index].url} activeAnnotator={responceAnnotator} index={index}/> 
              
              <h6 className="selectedCategory">Selected Category: </h6>
              <Dropdown   style={{position:'absolute',top:'64%',left:'26.2%',width:'56.9%'}}>
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    {category}
                  </Dropdown.Toggle>

                  <Dropdown.Menu as={CustomMenu} style={scrollContainerStyle} className="scrollbar scrollbar-primary">
                    {this.state.fileCategory.map((f,i) =>   
                    <Dropdown.Item onClick={()=>this.selectedCategoryName(f)}  key={i} eventKey={i}>
                    {f}
                    </Dropdown.Item>)}
 
                  </Dropdown.Menu>
              </Dropdown>,
              
                <h6 className="selectedQuality">Quality: </h6>
                <MDBBtnToolbar className="qualityButtons">
                  <Button className="goodButton" variant="outline-dark">Good</Button>
                  <Button className="badButton" variant="outline-dark">Bad</Button>
                </MDBBtnToolbar>
                <h6 className="cropButton">Crop: </h6>
                <MDBBtnToolbar className="formButtons">
                  <Button className="goodButton" onClick={this.audioTagHadler} variant="outline-success">Submit</Button>
                  <Button  className="badButton" variant="outline-danger" type="submit">Cancel</Button>
                </MDBBtnToolbar>
               
              
           </div>

              <RightNav audioLength={audioLength} audiolist={lists} index={this.state.index} audioObject={audioObject}/>
        </div>}
      </div>
    )
    }
}

export default MainPage;