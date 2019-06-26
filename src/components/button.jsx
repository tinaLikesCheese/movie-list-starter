import React from 'react'; 

class Button extends React.Component {
    constructor(props) {
    super(props)
    this.state = {isToggleOn: true}
}

handleClick(callback) {
    var name = this.props.name;
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    callback(name)
  }
  
  render(){
    var watch;
    if(this.state.isToggleOn === true){
       watch =  "watch"
    } else{
        watch = "willWatch"
    }
      return(
          <button className={watch} onClick={()=>this.handleClick(this.props.handleWatched)}> Watched </button>
      )
  }
}

export default Button; 