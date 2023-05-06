import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context';

const imgUrl = "https://via.placeholder.com/200/200"

const Movies = () => {
  const {movie, isLoading} = useGlobalContext();

  if(isLoading){
    return(
        <div className='loading'>Loading...</div>
    );
  }
  
  return (
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
        {movie.map((curMovie) => {
          const {imdbID, Title, Poster} = curMovie;
          const movieName = Title.substring(0,15); 
        return <NavLink to= {`movie/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              <h2>
                {movieName.length > 14 ? `${movieName}...` : movieName}
              </h2>
              <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
            </div>
          </div>
        </NavLink>
      })}</div>
    </section>
  );
}

export default Movies;
