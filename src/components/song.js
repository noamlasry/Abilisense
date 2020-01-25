import React, { Component } from "react";
import './song.css';
class Song extends Component {
  
  state = {
    songs: [
      { id: 1, title: "Campfire Story", type:"svg"},
      { id: 2, title: "Booting Up", type:"svg" },
      { id: 1, title: "Campfire Story", type:"svg"},
      { id: 1, title: "Campfire Story", type:"svg"},
      { id: 2, title: "Booting Up", type:"svg" },
      { id: 2, title: "Booting Up", type:"svg" },
      { id: 2, title: "Booting Up", type:"svg" }
      ]
  };
    render() {
      console.log("props", this.props)
          return (
            <div>

            <table>
              <tr>
               
               <th>title</th>
               <th>type</th>
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