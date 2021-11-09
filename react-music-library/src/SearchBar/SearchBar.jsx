import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: '',

         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filteredSongs(this.state)
    }

    

    render() { 
        return ( 
            <form className="form" onSubmit={this.handleSubmit}>
                <input name="filter" onChange={this.handleChange} value={this.state.filter}/>
                <button className="button" type="submit">Filter</button>
            </form>
         );
    }
}
 
export default SearchBar;