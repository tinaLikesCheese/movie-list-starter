import React from 'react'; 
import MovieListEntry from './MovieListEntry.jsx'


const MovieList = (props) => {
    if(props.movies.length === 0){
       return (
           <div><p>No movie by that name!</p></div>
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
