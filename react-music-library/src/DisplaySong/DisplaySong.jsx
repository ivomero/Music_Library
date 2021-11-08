import React from 'react';


export const DisplaySong = (props) => {


    return (
       
    <table border="1">
      <thead>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Genre</th>
        <th>Release Date</th>
        <th>Actions</th>
      </thead>
      
      <tbody>
        {props.songs.map((song) => (
          <tr>
            <td>{song.title}</td> 
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <button onClick={()=>props.delete(song.id)} type="button">Delete Song</button>
          </tr>
        ))}
      </tbody>
      </table>
    )
  }