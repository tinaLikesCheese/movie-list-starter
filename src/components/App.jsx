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
            toWatch: true,
        }
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onAddMovie = this.onAddMovie.bind(this);
        this.onWatchClick = this.onWatchClick.bind(this);
        this.onWatch = this.onWatch.bind(this);
        this.onToWatch = this.onToWatch.bind(this);
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
                movies: [...this.state.movies, {title: addMovie.value, watched: false}],
            });
        } else {
            alert('Movie has already been added.')
        }
    }

    onWatchClick(name){
        var movies= [];
        for (let movie of this.state.movies) {
            if (movie.title === name){
                movie.watched = !movie.watched;
                movies.push(movie);
                console.log('movie: ',movie)
            } else {
                movies.push(movie);
            }
        }
        this.setState({
            movies: movies,
        })
    }

    onToWatch(){
        this.setState({
            toWatch: true
        })
    }

    onWatch(){
        this.setState({
            toWatch: false
        })
    }

    render() {

        return (
        <div>
            <h2>Movie List</h2> 
            <Search handleWatch={this.onWatch} handleToWatch={this.onToWatch} handleSearch={this.onSearchClick} handleBack={this.onBackClick} handleAddMovie={this.onAddMovie} />
            <MovieList handleWatched={this.onWatchClick} movies={this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.input))}/>
        </div>
        )
    }
} 
  
export default App;





