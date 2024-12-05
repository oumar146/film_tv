import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MovieListByGenre from '../components/TMDB_API/MovieListByGenre';
import Header from '../components/Header';
import Snippet from '../components/Snippet';
import '../styles/pages/moviesByGenres.css'

function MoviesByGenres() {
    const [movies, setmovies] = useState([]);
    const { genreId, genreName } = useParams();

    if (!movies) {
        return (
            <Snippet />
        )
    }

    return (
        <div className='container'>
            <Header />
            <h2>Films du genre {genreName} : </h2>
            <MovieListByGenre id={genreId} setData={setmovies} />
            {movies &&
                <div className='movies'>
                    {
                        movies.map((movie) => (
                            <NavLink key={movie.id} className="card" onClick={() => window.scrollTo(0, 0)}
                                to={`/movie-page/${movie.id}`} >
                                <img
                                    src={`https://image.tmdb.org/t/p//w300/${movie.poster_path}`}
                                    alt={movie.title}
                                    title={movie.title}
                                    className='movie-space'
                                />
                            </NavLink>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default MoviesByGenres;
