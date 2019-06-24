import React from 'react'

class Search extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit(e, callback) {
        e.preventDefault();
        callback();
    }

    render() {
        return (
            <div>
                <form> 
                    <p><label>Add Movie</label></p>
                    <input type="text" id="addMovie"></input>
                    <p> <button type="submit" onClick={(e) => this.handleSubmit(e,this.props.handleAddMovie)}> Add a Movie </button> </p>
                    <p><label>Search</label></p>
                    <input type="text" name="search" id="search"></input>
                    <p> <button type="submit" onClick={(e) => this.handleSubmit(e,this.props.handleSearch)}> Search </button> </p>
                    <p> <button type="submit" onClick={(e) => this.handleSubmit(e, this.props.handleBack)}> Back </button> </p>
                </form>
            </div>)
    }
}



export default Search; 

