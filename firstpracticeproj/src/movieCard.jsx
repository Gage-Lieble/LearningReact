import React from "react";


const MovieCard = ({ movieinfo }) => {
    return (
        <div className='movie'>
            <p>{movieinfo.Year}</p>
            <div id="image-cont">
                <img src={movieinfo.Poster !== 'N/A' ? movieinfo.Poster: 'https://via.placeholder.com/300x424'} alt="movie-poster" />
            </div>
            <div id="card-chin">
            <span>Type: {movieinfo.Type}</span>
            <span>Title: {movieinfo.Title}</span>
            </div>
        </div>
    )
}

export default MovieCard