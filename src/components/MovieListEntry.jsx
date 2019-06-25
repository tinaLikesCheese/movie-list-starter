import React from 'react';

class MovieListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true}
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render() {
        var color;
        if(this.state.isToggleOn === true){
          color = "green"  
        } else{
            color = "white"
        }
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><button className='watch' onClick={()=>this.handleClick()}> Watched </button></td>
            </tr>
        )
    }
}

export default MovieListEntry; 
