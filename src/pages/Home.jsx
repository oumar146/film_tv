import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Movies from '../components/TMDB_API/Movies';
import MoviesCarousel from '../components/MoviesCarousel';
import Snippet from '../components/Snippet';
import '../styles/pages/home.css'

/**SIMPLE COMPONENT */
const ClassicMoviesCarousel = () => {
    const [classicMovies, setClassicMovies] = useState([]);

    if (!classicMovies) {
        return (
            <Snippet />
        )
    }

    return (
        <div>
            <Movies url='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' setData={setClassicMovies} />
            {classicMovies.length > 0 && <MoviesCarousel title='Classiques' moviesList={classicMovies} />}
        </div>
    );


}
const PopularMoviesCarousel = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    if (!popularMovies) {
        return (
            <Snippet />
        )
    }

    return (
        <div>
            <Movies url='https://api.themoviedb.org/3/trending/movie/day?language=en-US' setData={setPopularMovies} />
            {popularMovies.length > 0 && <MoviesCarousel title='Populaires' moviesList={popularMovies} />}
        </div>
    );


}

const TopRatedMoviesCarousel = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    if (!topRatedMovies) {
        return (
            <Snippet />
        )
    }

    return (
        <div>
            <Movies url='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' setData={setTopRatedMovies} />
            {topRatedMovies.length > 0 && <MoviesCarousel title='Meilleures notes' moviesList={topRatedMovies} />}
        </div>
    );

}

/******COMPOSANT */
const Home = () => {

    return (
        <div>
            <Banner>
                <Header />
            </Banner>
            <main className='home-carousels'>
                <ClassicMoviesCarousel />
                <TopRatedMoviesCarousel />
                <PopularMoviesCarousel />
            </main>
        </div>
    )
}

export default Home;
