import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchMovies from '../components/TMDB_API/SearchMovies';
import Snippet from '../components/Snippet';
import '../styles/pages/SearchedMovie.css'
const SearchedMovie = () => {
    const { input } = useParams();
    const [movies, setMovies] = useState([]);

    if (!movies) {
        return (
            <Snippet />
        )
    }

    return (
        <div className='container' style={{ minHeight: '100vh' }} >
            <SearchMovies input={input} setData={setMovies} />
            <Header />
            <p className='search-results'>{`Résultat pour la recherche : ${input}`}</p>
            {movies &&
                <div className='movies'>
                    {
                        movies.map((movie) => (
                            <NavLink key={movie.id} className="card" onClick={() => window.scrollTo(0, 0)}
                                to={`/movie-page/${movie.id}`} >
                                {movie.poster_path && <img
                                    src={`https://image.tmdb.org/t/p//w300/${movie.poster_path}`}
                                    alt={movie.name}
                                    title={movie.name}
                                    className='movie-position'
                                />}
                            </NavLink>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default SearchedMovie;




