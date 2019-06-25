import React from 'react'

class Search extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit(e, callback) {
        e.preventDefault();
        callback();
        search.value='';
        addMovie.value='';
    }

    render() {
        return (
            <div className='NavBar'>
                <form> 
                    <input type="text" name="movie" id="addMovie"></input>
                    <button type="submit" onClick={(e) => this.handleSubmit(e,this.props.handleAddMovie)}> Add a Movie </button>
                    <input type="text" name="search" id="search"></input>
                    <button type="submit" onClick={(e) => this.handleSubmit(e,this.props.handleSearch)}> Search </button>
                    <button type="submit" onClick={(e) => this.handleSubmit(e, this.props.handleBack)}> Back </button>
                </form>
                <p><button type="submit" className="watchBtn" onClick={(e)=>this.handleSubmit(e,this.props.handleToWatch)}> TO WATCH </button>
                <button type="submit" className="watchBtn" onClick={(e)=>this.handleSubmit(e,this.props.handleWatch)}> WATCHED </button></p>

            </div>)
    }
}



export default Search; 

