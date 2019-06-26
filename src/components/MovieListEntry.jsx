import React from 'react';
import Button from './button.jsx'

class MovieListEntry extends React.Component {
    constructor(props){
        super(props)
    }

    handleMovieClick(e){
        e.preventDefault();
        alert('hello');
    }


    render() {
        return (
            <tr>
                <td><a href=" " onClick={(e)=>this.handleMovieClick(e)} className="movieTitle">{this.props.movie.title}</a><Button movie={this.props.movie} handleWatched={this.props.handleWatched}/> </td>
            </tr>
        )
    }
}

export default MovieListEntry; 
