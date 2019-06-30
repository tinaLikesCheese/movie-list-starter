import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import axios from 'axios'
  
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input:'',
            movies: [],
            watched: false,
            currKey: 0,
        }
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onAddMovie = this.onAddMovie.bind(this);
        this.onWatchClick = this.onWatchClick.bind(this);
        this.onWatch = this.onWatch.bind(this);
        this.onToWatch = this.onToWatch.bind(this);
        this.onMovieClick = this.onMovieClick.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    // componentDidMount() {
    //     this.getMovies();
    // }


    getMovies() {
        axios.get('/movies')
        .then(({data})=> console.log(data))
        .catch(console.log);
    }
    
    onSearchClick() {
        this.setState({
        input: search.value.toLowerCase()
        });
        search.value='';
    }

    onBackClick(){
        this.setState({
            input:''
        })
    }

    onAddMovie(movie){
        const {title, release_date, vote_average, overview, poster_path} = movie;
        if(!addMovie.value.length){
            alert('Enter a movie please')
            return;
        }
        let movieTitles = this.state.movies.map(movie=>movie.title.toLowerCase());
        if(!movieTitles.includes(title.toLowerCase())){
            this.setState({
                movies: [...this.state.movies, {title: title, watched: false, expanded: false, id: this.state.currKey, year: release_date.slice(0,4), score: vote_average, description: overview, poster: poster_path}],
                currKey: this.state.currKey + 1
            });
        } else {
            alert('Movie has already been added.')
        }
        addMovie.value=''
    }

    onWatchClick(name){
        var movies= [];
        for (let movie of this.state.movies) {
            if (movie.title === name){
                movie.watched = !movie.watched;
                movie.expanded = false;
                movies.push(movie);
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
            watched: false
        })
    }

    onWatch(){
        this.setState({
            watched: true
        })
    }

    onMovieClick(name){
        var movies= [];
        for (let movie of this.state.movies) {
            if (movie.title === name){
                movie.expanded = !movie.expanded;
                movies.push(movie);
            } else {
                movies.push(movie);
            }
        }
        this.setState({
            movies: movies,
        })
    }

    render() {
        var movies;
        if(this.state.watched){
            movies = this.state.movies.filter(movie=>movie.watched); 
        }else if(!this.state.watched){
            movies = this.state.movies.filter(movie=>movie.watched===false); 
        }
        return (
        <div>
            <h2>Movie List</h2> 
            <Search handleWatch={this.onWatch} handleToWatch={this.onToWatch} handleSearch={this.onSearchClick} handleBack={this.onBackClick} handleAddMovie={this.onAddMovie} />
            <button onClick={this.getMovies}>Click Me</button>
            <MovieList handleMovieData={this.onMovieClick} handleWatched={this.onWatchClick} movies={movies.filter(movie => movie.title.toLowerCase().includes(this.state.input))}/>
        </div>
        )
    }
} 
  
export default App;





