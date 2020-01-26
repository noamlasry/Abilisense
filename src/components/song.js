import React, { Component } from "react";
import './song.css';
class Song extends Component {
  
  state = {
    songs: [
      { id: 1, title: "Campfire Story", type:"svg"},
      { id: 2, title: "City Of The Sun", type:"mp3" },
      { id: 1, title: "Milky Chance - Fairytale", type:"mp4"},
      { id: 1, title: "Live is Life - Opus", type:"avi"},
      { id: 2, title: "The Cars - Drive", type:"awv" },
      { id: 2, title: "Dennis Lloyd - Unfaithful", type:"mp3" },
      { id: 2, title: "Booting Up", type:"m4a" },
      { id: 1, title: "the way i am", type:"svg"},
      { id: 1, title: "moonriver", type:"avi"},
      { id: 1, title: "american idiot", type:"svg"}
      ]
  };
    render() {
      console.log("props", this.props)
          return (
            <div>

            <table>
              <tr>
               
               <th>Title</th>
               <th>Type</th>
              </tr>
            
              {this.state.songs.map(song => <tr>
                
                <td className="tds">{song.title}</td>
                <td className="tds">{song.type}</td>
                </tr>)}
              
              </table>
            </div>
          );
        };
}

export default Song;