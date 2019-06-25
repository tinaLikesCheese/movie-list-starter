import React from 'react';

class MovieListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: false}
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(callback) {
        var name = this.props.name;
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
        callback(name)
      }

    render() {
        var watch;
        if(this.state.isToggleOn === true){
           watch =  "watch"
        } else{
            watch = "willWatch"
        }
        return (
            <tr>
                <td>{this.props.name}<button className={watch} onClick={()=>this.handleClick(this.props.handleWatched)} > Watched </button></td>
            </tr>
        )
    }
}

export default MovieListEntry; 
