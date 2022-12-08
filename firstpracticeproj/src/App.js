import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './movieCard';


const App = () => {

    const [movies, setMovies] = useState([]);
    
    const [search, setSearch] = useState('')
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=ce4e0527`

    // api call
    const searchMovies = async(title) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    const buildMovies = 
    // runs once when page loads
    useEffect(() => {
        searchMovies('spiderman')
    }, [])


    const movieTest = {
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
    }

    return (
        <div className="App">
            <h1>Movies search</h1>

            <div className='search'>
                <input placeholder='title' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => searchMovies(search)}>Search</button>
            </div>

            { // checks if list has any movies
                movies?.length > 0
                ?(
                    <div className='cont'>
                        {movies.map((movie) => (
                            <MovieCard movieinfo={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App

// ce4e0527 - API KEY

// http://www.omdbapi.com/?i=tt3896198&apikey=ce4e0527 - API LINK