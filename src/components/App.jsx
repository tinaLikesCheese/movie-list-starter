import React from 'react';
import MovieList from './MovieList.jsx'
import movies from '../data/exampleMovieData.js'
import Search from './Search.jsx'
  
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input:'',
            movies: [],
            watched: [],
        }
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onAddMovie = this.onAddMovie.bind(this);
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

    onAddMovie(){
        let movieTitles = this.state.movies.map(movie=>movie.title.toLowerCase());
        if(!movieTitles.includes(addMovie.value.toLowerCase())){
            this.setState({
                movies: [...this.state.movies, {title: addMovie.value}],
            });
        } else {
            alert('Movie has already been added.')
        }
    }

    render() {
        return (
        <div>
            <h2>Movie List</h2> 
            <Search handleSearch={this.onSearchClick} handleBack={this.onBackClick} handleAddMovie={this.onAddMovie} />
            <MovieList movies={this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.input))}/>
        </div>
        )
    }
} 
  
export default App;





