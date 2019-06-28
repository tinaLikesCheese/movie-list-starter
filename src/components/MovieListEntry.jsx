import React from 'react';
import Button from './button.jsx'

class MovieListEntry extends React.Component {
    constructor(props){
        super(props)
    }

    handleMovieClick(e, callback){
        var name = this.props.movie.title
        e.preventDefault();
        callback(name); 
    }

    render() {
        if(this.props.movie.expanded){
            return(
            <tr>
                <td>
                    <p><a href=" " onClick={(e)=>this.handleMovieClick(e, this.props.handleMovieData)} className="movieTitle">{this.props.movie.title} Expanded</a></p>
                    <p>Year: {this.props.movie.year}</p>
                    <p>Rating: {this.props.movie.score} </p> 
                    <p>imdbRating: Num</p>
                    <Button movie={this.props.movie} handleWatched={this.props.handleWatched}/>
                </td>
            </tr>   
            )
        } else {
            return (
                <tr>
                    <td><a href=" " onClick={(e)=>this.handleMovieClick(e, this.props.handleMovieData)} className="movieTitle">{this.props.movie.title}</a></td>
                </tr>           
            )
        }
    }
}

export default MovieListEntry; 
