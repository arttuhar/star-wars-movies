import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GridItem() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://frantic.s3-eu-west-1.amazonaws.com/films.json`)
            .then(res => {
                const responseMovies = res.data.films;
                setMovies(responseMovies);
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const showResults = movies.map((movie, idx) => {
        return (
            <div key={idx} className='gridCard'>
                <div className='posterContainer'>
                    <img className='poster' src={movie.Poster} alt='Movie poster' />
                </div>
                <div className='movieDetails'>
                    <h4>{movie.Year}</h4>
                    <h4>{movie.Title}</h4>
                </div>
            </div>
        )
    })

    return (
        <div className='gridItem'>
            {showResults}
        </div>
    )
}

export default GridItem
