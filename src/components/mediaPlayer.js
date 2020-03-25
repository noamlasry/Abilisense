import React, { Component } from 'react';
import './player.css';
import MusicPlayer from 'react-responsive-music-player';

const playlist = [
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    cover: 'path/to/jpg',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  },
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
    cover: 'path/to/jpg',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  }
]
class MediaPlayer  extends Component{
    render(){
       return(
        
        <div>
        <MusicPlayer playlist={playlist} />
      </div>
    )
};
}

export default MediaPlayer ;