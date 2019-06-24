import React from 'react'; 
import MovieListEntry from './MovieListEntry.jsx'


const MovieList = (props) => {
    if(props.movies.length === 0){
       return (
           <div><h3>No movies at this time!</h3></div>
       )
    } 
    return (
    <div>
        <table>  
            <tbody>
            {props.movies.map((movie) =>
            <MovieListEntry name={movie.title}/>)}
            </tbody>
        </table>
    </div>
    )};

export default MovieList; 
