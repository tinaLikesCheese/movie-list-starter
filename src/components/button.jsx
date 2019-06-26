import React from 'react'; 

class Button extends React.Component {
    constructor(props) {
    super(props)
}

handleClick(callback) {
    var name = this.props.movie.title;
    callback(name)
  }
  
  render(){
    var watch;
    var text;
    if(this.props.movie.watched){
       watch =  "watch"
       text = "X Watched"
    } else{
        watch = "willWatch"
        text ="O Watched "
    }
      return(
          <button className={watch} onClick={()=>this.handleClick(this.props.handleWatched)}> {text} </button>
      )
  }
}

export default Button; 




