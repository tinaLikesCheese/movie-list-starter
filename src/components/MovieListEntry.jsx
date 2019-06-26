import React from 'react';
import Button from './button.jsx'

class MovieListEntry extends React.Component {


    render() {
        return (
            <tr>
                <td>{this.props.movie.title} <Button movie={this.props.movie} handleWatched={this.props.handleWatched}/> </td>
            </tr>
        )
    }
}

export default MovieListEntry; 
