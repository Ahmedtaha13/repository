import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      {/* Add other details like poster, release date, etc. */}
    </div>
  );
}

export default MovieCard;