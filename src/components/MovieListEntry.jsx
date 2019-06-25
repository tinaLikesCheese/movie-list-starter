import React from 'react';

const MovieListEntry = (props) => (
<tr>
    <td>{props.name}</td>
    <td><button className='watch' onClick={() =>alert('hello')}> Watched </button></td>
</tr>
)

export default MovieListEntry; 