import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

import '../styles/moviesCarousel.css'
const MoviesCarousel = (props) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        initialSlide: 0,
        arrows: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <div>
            {props.moviesList.length > 0 && (
                <div>
                    <div >
                        {props.title && <h4 className="carousel-title">{props.title}</h4>}
                    </div>
                    <Slider {...settings} className="carousel">
                        {props.moviesList.map((movie) => (movie.poster_path &&
                            <NavLink key={movie.id} className="card" onClick={() => window.scrollTo(0, 0)}
                                to={`/movie-page/${movie.id}`} >
                                <img
                                    src={`https://image.tmdb.org/t/p//w300/${movie.poster_path}`}
                                    alt=""
                                    title=""
                                />
                            </NavLink>
                        ))}
                    </Slider>
                </div >
            )}
        </div >
    );
}

export default MoviesCarousel;