import React from 'react';
import MovieList from './MovieList.jsx'
import movies from '../data/exampleMovieData.js'
import Search from './Search.jsx'
  
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {input:''}
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

    onSearchClick() {
        this.setState({
        input: search.value.toLowerCase()
        });
    }

    onBackClick(){
        this.setState({
            input:''
        })
    }

    render() {
        return (
        <div>
            <h2>My Awesome Movie List Table</h2> 
            <Search handleSearch={this.onSearchClick} handleBack={this.onBackClick}/>
            <MovieList movies={movies.filter(movie => movie.title.toLowerCase().includes(this.state.input))} />
        </div>
        )
    }
} 
  
export default App;





