import React, { Component } from "react";
import './leftNav.css';
// import  Category  from "../categories/category";
import { MDBContainer } from "mdbreact";

import { Storage } from "@aws-amplify/storage";
// import { S3Image } from 'aws-amplify-react';


class LeftNav extends Component {
    state = {
        files: [],
      }
      async componentDidMount() {
        const files = await Storage.list('')
        console.log('files: ', files)
        this.setState({ files })
      }
    
    
    // state = {fileUrl: '', file:'', filename:''}
    // handlechange = e => {
    //     const file = e.target.files[0]
    //     this.setState({
    //         fileUrl: URL.createObjectURL(file),
    //         file,
    //         filename: file.name
    //     })
    // }
    // savefile = () => {
    //     Storage.put(this.state.filename, this.state.file)
    //         .then(() => {
    //             console.log("success upload")
    //             this.setState({fileUrl: '', file: '', filename: ''})
    //         })
    //         .catch(err =>{
    //             console.log('theres an error amir!!!!', err)
    //         })
    // }
    
    
    render(){
        const scrollContainerStyle = { width: "100%", maxHeight: "80vh" };

        return(
            

            <div className="leftnav">
                <h3 className="h3" >Categories</h3>

            {/* {
                this.state.files.map((f, i) => (
                    <div key={i}>
                        <S3Image 
                        imgKey={f.key}
                        />
                        <h3>f.key</h3>
                    </div>
                ))
            } */}
            <MDBContainer>
                <div className="scrollbar scrollbar-primary"  style={scrollContainerStyle}>
                <ol className="ol" >
                {this.state.files.map((f,i) =>
                  <li className="li" key={i}>
                    {f.key}
                  </li>)}
                </ol>
                </div>
              </MDBContainer>
                {/* <Category /> */}
            </div>
        )
 };
   
}

export default LeftNav;