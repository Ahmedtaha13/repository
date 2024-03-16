
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieDescription from './MovieDescription';

const moviesData = [
  {
    id: 1,
    title: 'Movie 1',
    description: 'Description for Movie 1.',
    trailerLink: 'https://www.youtube.com/embed/trailer1',
  },
  {
    id: 2,
    title: 'Movie 2',
    description: 'Description for Movie 2.',
    trailerLink: 'https://www.youtube.com/embed/trailer2',
  },
  
];

function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <h1>Movie List</h1>
            <div>
              {movies.map(movie => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <MovieCard movie={movie} />
                </Link>
              ))}
            </div>
          </Route>
          <Route path="/movies/:id">
            <MovieDescription movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
