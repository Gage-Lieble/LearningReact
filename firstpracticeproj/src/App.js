import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './movieCard';
import './App.css'

const App = () => {

    // runs once when page loads
    const [movies, setMovies] = useState([]);
    
    const [search, setSearch] = useState('')
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=ce4e0527`

    // api call
    const searchMovies = async(title) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json()
        console.log(`Searching ${title}....`)
        setMovies(data.Search)
    }
    useEffect(() => {
        const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=ce4e0527`
        const searchMovies = async(title) => {
            const response = await fetch(`${apiUrl}&s=${title}`)
            const data = await response.json()
    
            setMovies(data.Search)
        }

        const randMovies = ['Spider man', 'Batman', 'Hunger Games', 'Breaking Bad', 'Thor', 'Iron Man', 'Superman']
        let randI = Math.floor(Math.random()*randMovies.length)
        
        searchMovies(randMovies[randI])
    }, [])


    return (
        <div className="App">
            <h1>Movies search react</h1>

            <div className='search'>
                <input placeholder='Movie Title' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => searchMovies(search)}>Search</button>
            </div>

            { // checks if list has any movies
                movies?.length > 0
                ?(
                    <div className='cont'>
                        {movies.map((movie) => (
                          
                            <MovieCard movieinfo={movie} key={movie.Title}/>
                          
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No matches... sorry -Gage Lieble</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App

// ce4e0527 - API KEY

// http://www.omdbapi.com/?i=tt3896198&apikey=ce4e0527 - API LINK