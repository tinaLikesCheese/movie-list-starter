import React from 'react';
import Button from './button.jsx'

class MovieListEntry extends React.Component {


    render() {

        return (
            <tr>
                <td>{this.props.name} <Button name={this.props.name} handleWatched={this.props.handleWatched}/> </td>
            </tr>
        )
    }
}

export default MovieListEntry; 
