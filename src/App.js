import Home from './pages/Home';
import PageMovie from './pages/MoviePage';
import SearchedMovie from './pages/SearchedMovie';
import MoviesByGenres from './pages/MoviesByGenres';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie-page/:movieId" element={<PageMovie />} />
        <Route
          path="/movie-by-genre/:genreName/:genreId"
          element={<MoviesByGenres />}
        />
        <Route path="/movie-searched/:input" element={<SearchedMovie />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
