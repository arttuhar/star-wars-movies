import React, { useState, useEffect } from 'react';
import './scss/App.scss';
import axios from 'axios';

import Heading from './components/Heading';
import Content from './components/Content';

function App() {

  const imdbUrl = 'https://www.imdb.com/title/';

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
                  <a className='imdbLink' href={imdbUrl + movie.imdbID} target='_blank' rel='noreferrer'>
                      <img className='poster' src={movie.Poster} alt='Movie poster' />
                  </a>
              </div>
              <div className='movieDetails'>
                  <h3 className='movieYear'>{movie.Year}</h3>
                  <h3 className='movieTitle'>{movie.Title}</h3>
              </div>
          </div>
      )
  })

  return (
    <div className="App">
      <Heading />
      <Content showResults={showResults} />
    </div>
  );
}

export default App;
