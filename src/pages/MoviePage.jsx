import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Slider from "react-slick";
import MovieDetails from '../components/TMDB_API/MovieDetails';
import MovieActors from '../components/TMDB_API/MovieActors';
import SimilarMovies from '../components/TMDB_API/SimilarMovies';
import MovieVideo from '../components/TMDB_API/MovieVideo';
import Snippet from '../components/Snippet';
import { NavLink } from 'react-router-dom';
import '../styles/moviePage.css'

/***SIMPLE COMPONENTS */
const Recommendations = (props) => {
    const [recommendations, setRecommendations] = useState([])

    //configuration du caroussel
    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        initialSlide: 4,
        slidesToScroll: 4,
        ardivs: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 922,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                },
            },
        ],
    };

    if (!recommendations) {
        return (
            <Snippet />
        )
    }

    return (
        <div>
            <SimilarMovies id={props.movieId} setData={setRecommendations} />
            <Slider Slider {...settings}  >
                {
                    recommendations.map((movie) => (
                        movie.poster_path &&(<NavLink key={movie.id} className="card" onClick={() => window.scrollTo(0, 0)}
                            to={`/movie-page/${movie.id}`} >
                            <img src={`https://image.tmdb.org/t/p//w300/${movie.poster_path}`}
                                alt={`poster du film ${movie.name}`}
                                title={movie.name}
                            />
                        </NavLink>)
                    ))
                }
            </Slider >
        </div>
    )
}

const Actors = (props) => {
    const [actors, setActors] = useState([])

    //configuration du caroussel
    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        initialSlide: 4,
        slidesToScroll: 4,
        ardivs: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 922,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                },
            },
        ],
    };

    if (!actors) {
        return (
            <Snippet />
        )
    }

    return (
        <div>
            <MovieActors id={props.movieId} setData={setActors} />
            <Slider Slider {...settings}  >
                {
                    actors.map((actor) => (actor.profile_path &&
                        <div key={actor.id} className="card" >
                            <img src={`https://image.tmdb.org/t/p//w300/${actor.profile_path}`}
                                alt={actor.name}
                                title={actor.name}
                            />
                            <p className='actor-name'>{actor.character}<br /> <span>{actor.name}</span></p>
                        </div>
                    ))
                }
            </Slider >
        </div>
    )
}




const Detail = (props) => {

    return (
        <div>
            <MovieDetails id={props.movieId} setData={props.setMovieDetails} />
            {props.movieDetails &&
                <div className='horizontal-alignment content movie-page-container'>
                    {/***Affichage de l'image du film*/}
                    <img
                        src={`https://image.tmdb.org/t/p//w300/${props.movieDetails.poster_path}`}
                        alt={`${props.movieDetails.title}`}
                        title={props.movieDetails.title}

                    />
                    <div >
                        {/***Affichage du nom */}
                        <h2 className='movie-title'>{props.movieDetails.name ? props.movieDetails.name : props.movieDetails.title}</h2>
                        <div className='notation-and-date'>
                            {/***Affichage de la date de sortie */}
                            <span>
                                {props.movieDetails.release_date && props.movieDetails.release_date.substr(0, 4)}
                            </span>
                            {/***Affichage de la note moyenne*/}
                            <strong>
                                {props.movieDetails.vote_average &&
                                    (Number.isInteger(
                                        parseFloat(Math.round(props.movieDetails.vote_average * 10) / 10)
                                    )
                                        ? `${parseFloat(Math.round(props.movieDetails.vote_average * 10) / 10)}.0`
                                        : parseFloat(Math.round(props.movieDetails.vote_average * 10) / 10))}
                            </strong>
                        </div>
                        {/***Affichage du/des genre(s) */}
                        {props.movieDetails.genres && Array.isArray(props.movieDetails.genres) &&
                            <p>{props.movieDetails.genres.map((genre) => genre.name).join(', ')}</p>}


                        {/***Affichage du résumé */}
                        <p className='overview'>
                            {props.movieDetails.overview && props.movieDetails.overview}
                        </p>
                        {props.children}
                    </div>
                </div>}
        </div>)
}

const TrailerButton = (props) => {
    const [trailer, setTrailer] = useState({})
    return (
        <div>
            <MovieVideo id={props.movieId} setData={setTrailer} />
            {trailer.length > 0 && (
                <a className='trailer-btn' target='_blank' href={`https://www.youtube.com/watch?v=${trailer[0].key}`} rel="noopener noreferrer">
                    Voir le trailer
                </a>
            )}
        </div>

    )

}


/**COMPONENT */
const PageMovie = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const [backgroundImageStyle, setBackgroundImageStyle] = useState({})

    useEffect(() => {
        movieDetails &&
            setBackgroundImageStyle({
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #181818), url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
            })

    }, [movieDetails])


    return (
        <div id='movie-page' style={backgroundImageStyle}>
            <Header />
            <Detail movieId={movieId} movieDetails={movieDetails} setMovieDetails={setMovieDetails}>
                <TrailerButton movieId={movieId} />
            </Detail>
            <Recommendations movieId={movieId} />
            <Actors movieId={movieId} />
        </div>
    );
}

export default PageMovie;



