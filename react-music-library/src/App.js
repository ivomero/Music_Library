import React, { Component } from 'react';
import axios from 'axios';
import { DisplaySong } from './DisplaySong/DisplaySong';
import { SongForm } from './SongForm/SongForm';


class App extends Component {
  
  constructor(props){
    super(props);


    this.state = {
      songs: [],
      songId: 0
    }

  }

  componentDidMount(){
    this.getAllSongs();
  }
  
  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs:response.data
    });
  }

  async deleteSong(id){
    let deletedSong= await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    this.setState({
      songs:deletedSong.data
    });
  }
  async createSong (newSong) {
    let postSong= await axios.post(`http://127.0.0.1:8000/music/${id}/`);
    this.setState({
        songs:postSong.data,
        songId: this.state.songs.length + 1
    })
}
  
  render(){
    return (
      <div className="App">
        <DisplaySong songs={this.state.songs} delete = {this.deleteSong} />
        <SongForm createNewSong={this.createSong} />
      </div>
    );
  }
}
export default App