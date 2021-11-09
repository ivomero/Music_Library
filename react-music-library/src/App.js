import React, { Component } from 'react';
import axios from 'axios';
import { DisplaySong } from './DisplaySong/DisplaySong';
import SongForm from './SongForm/SongForm';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {
  
  constructor(props){
    super(props);


    this.state = {
      songs: [],
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
    
  }
  async createSong (newSong) {
    let postSong= await axios.post('http://127.0.0.1:8000/music/', newSong);
  }

  filterSongs = (searchTerm) => {
    let filteredSongs = this.state.songs.filter(function(song) {
        if(song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.genre.includes(searchTerm) || song.release_date.includes(searchTerm)){
          this.setState({
            songs:filteredSongs.data
          })
          return true;
        } else {
            return false;
        }
    });
  }

  render(){
    return (
      <div className="App">
        <SearchBar filteredSongs= {this.filterSongs} />
        <DisplaySong songs={this.state.songs} delete = {this.deleteSong} />
        <SongForm createNewSong={this.createSong} />
      </div>
    );
  }
}
export default App