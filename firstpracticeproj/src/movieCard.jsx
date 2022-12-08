import React from "react";


const MovieCard = ({ movieinfo }) => {
    return (
        <div className='movie'>
            <p>{movieinfo.Year}</p>
            <img src={movieinfo.Poster != 'N/A' ? movieinfo.Poster: 'https://via.placeholder.com/400'} />
            <span>{movieinfo.Type}</span>
            <span>{movieinfo.Title}</span>
        </div>
    )
}

export default MovieCard