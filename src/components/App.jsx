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
        this.onWatchClick = this.onWatchClick.bind(this);
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
        if(addMovie.value.length===0){
            alert('Enter a movie in please')
            return;
        }
        let movieTitles = this.state.movies.map(movie=>movie.title.toLowerCase());
        if(!movieTitles.includes(addMovie.value.toLowerCase())){
            this.setState({
                movies: [...this.state.movies, {title: addMovie.value}],
            });
        } else {
            alert('Movie has already been added.')
        }
    }

    onWatchClick(name){
        let movieTitles = this.state.watched.map(movie=>movie.title.toLowerCase());
        if(!movieTitles.includes(name.toLowerCase())){
            this.setState({
                watched: [...this.state.watched, {title: name}],
            });
        } else {
            this.setState({
                watched: [...this.state.watched].filter(movie => movie.title !==name)
            })
        }
    }

    render() {
        return (
        <div>
            <h2>Movie List</h2> 
            <Search handleSearch={this.onSearchClick} handleBack={this.onBackClick} handleAddMovie={this.onAddMovie} />
            <MovieList handleWatched={this.onWatchClick} movies={this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.input))}/>
        </div>
        )
    }
} 
  
export default App;





