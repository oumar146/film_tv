import React, { useState, useEffect } from 'react';
import Movies from './TMDB_API/Movies';
import MoviesCarousel from './MoviesCarousel';
import { NavLink } from 'react-router-dom';
import '../styles/banner.css'

const InfoBannerMovie = (props) => {

    // Limiter les résumés de films supérieur à 50 mots
    const truncateOverview = (overview, maxWords) => {
        const words = overview.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return overview;
    };

    if (!props.movie) {
        return (
            <div class="loader"></div>
        )
    }

    return (
        <div>
            {props.movie && (
                <div >
                    <div className='title-movie-banner'>
                        <h2 >{props.movie.name ? props.movie.name : props.movie.title}</h2>
                    </div>
                    <div className='overview-banner-movie'>
                        <p >
                            {props.movie.overview && truncateOverview(props.movie.overview, 50)}
                        </p>
                    </div>
                    <div className='button-watch-now horizontal-alignment'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle h-auto mb-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                        </svg>
                        <NavLink to={`/movie-page/${props.movie.id}`} className='navlink '><span className='button-content'>Regarder maintenant</span></NavLink>
                    </div>
                </div>
            )}
        </div >
    );
};


const Banner = (props) => {
    const [bannerMovie, setBannerMovie] = useState([]);
    const [backgroundImageStyle, setBackgroundImageStyle] = useState([]);

    useEffect(() => {
        if (bannerMovie && bannerMovie.length > 0) {
            setBackgroundImageStyle({
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #1a1919), url(https://image.tmdb.org/t/p/original/${bannerMovie[0].backdrop_path})`,
            });
        }
    }, [bannerMovie]);

    if (!bannerMovie) {
        return (
            <div class="loader"></div>
        )
    }

    return (
        <section style={backgroundImageStyle}>
            {bannerMovie &&
                <div id='banner'>
                    {props.children}
                    <Movies url='https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1' setData={setBannerMovie} />
                    <InfoBannerMovie movie={bannerMovie[0]} />
                    <MoviesCarousel title='Populaires' moviesList={bannerMovie} />
                </div>
            }
        </section >

    );
}


export default Banner;
