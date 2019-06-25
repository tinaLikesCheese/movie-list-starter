import React from 'react'; 
import MovieListEntry from './MovieListEntry.jsx'


const MovieList = (props) => {
    if(props.movies.length === 0){
       return (
           <div><h4>No movies at this time</h4></div>
       )
    } 
    return (
    <div>
        <table className="centerTable">  
            <tbody>
            {props.movies.map((movie) =>
            <MovieListEntry name={movie.title} handleWatched={props.handleWatched}/>)}
            </tbody>
        </table>
    </div>
    )}

export default MovieList; 
