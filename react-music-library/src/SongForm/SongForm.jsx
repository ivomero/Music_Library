import React, { Component } from 'react';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            artist:'',
            album:'',
            genre:'',
            release_date:''

         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }

    

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input name="title" onChange={this.handleChange} value={this.state.title}/>
                <label>Artist</label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
                <label>Album</label>
                <input name="album" onChange={this.handleChange} value={this.state.album}/>
                <label>Genre</label>
                <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                <button type="submit">Create Song</button>
            </form>
         );
    }
}
 
export default SongForm;