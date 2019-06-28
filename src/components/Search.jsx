import React from 'react'
import axios from 'axios'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, callback) {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d3d0044fac0806aa388e4ee13d415f04&language=en-US&query=${addMovie.value}&page=1&include_adult=false`)
        .then(({data}) => callback(data.results[0]))
        .catch(console.log);
    }

    handleClick(e, callback) {
        e.preventDefault();
        callback(); 
    }

    handleChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='NavBar'>
                <form> 
                    <input type="text" name="movie" id="addMovie" onChange={this.handleChange}></input>
                    <button type="submit" onClick={(e) => this.handleSubmit(e,this.props.handleAddMovie)}> Add a Movie </button>
                    <input type="text" name="search" id="search"></input>
                    <button type="submit" onClick={(e) => this.handleClick(e,this.props.handleSearch)}> Search </button>
                    <button type="submit" onClick={(e) => this.handleClick(e, this.props.handleBack)}> Back </button>
                </form>
                <p><button type="submit" className="watchBtn" onClick={(e)=>this.handleClick(e,this.props.handleToWatch)}> TO WATCH </button>
                <button type="submit" className="watchBtn" onClick={(e)=>this.handleClick(e,this.props.handleWatch)}> WATCHED </button></p>

            </div>)
    }
}



export default Search; 

