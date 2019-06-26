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
                <td><a href=" " onClick={(e)=>this.handleMovieClick(e, this.props.handleMovieData)} className="movieTitle">{this.props.movie.title} Expanded</a><Button movie={this.props.movie} handleWatched={this.props.handleWatched}/></td>
            </tr>   
            )
        } else {
            return (
                <tr>
                    <td><a href=" " onClick={(e)=>this.handleMovieClick(e, this.props.handleMovieData)} className="movieTitle">{this.props.movie.title}</a><Button movie={this.props.movie} handleWatched={this.props.handleWatched}/></td>
                </tr>           
            )
        }
    }
}

export default MovieListEntry; 
