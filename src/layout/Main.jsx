import React from "react";
import { MoviesList } from "../components/MoviesList";

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=9b9eec36&s=matrix`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;
        return <main className="container content">
            
            {
                movies ? (
                <MoviesList movies={this.state.movies}/>
                ) : <h5>Loading...</h5>
            }
                
        </main>
    }
    
};

export {Main};