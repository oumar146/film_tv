import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MovieGenres from "./TMDB_API/MovieGenres";
import "../styles/header.css";
import Dropdown from "react-bootstrap/Dropdown";
import SideMenu from "./SideMenu"

const GenresList = () => {
  const [listGenres, setListGenres] = useState([]);
  return (
    <li className="header-link">
      <MovieGenres setData={setListGenres} />
      {listGenres && (
        <Dropdown>
          <Dropdown.Toggle variant="transparent" className="genres-list">Genres</Dropdown.Toggle>

          <Dropdown.Menu>
            {listGenres.map((genre) => (
              <Dropdown.Item
                key={genre.id}
                onClick={() => window.scrollTo(0, 0)}
              >
                <NavLink
                  className="navlink"
                  to={`/movie-by-genre/${genre.name}/${genre.id}`}
                >
                  {genre.name}
                </NavLink>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </li>
  );
};



function Header() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movie-searched/${input}`);
    window.scrollTo(0, 0);
  };

  const links = ["Home","Films","Séries"];
  
  return (
    <header className="horizontal-alignment">
      <div className="horizontal-alignment">
        <SideMenu/>
        <h1 className="logo">
          <NavLink to="/home" className="navlink">
            FilmTV
          </NavLink>
        </h1>
      </div>
      <ul className="horizontal-alignment header-links" >
      <GenresList />
        {links.map((link, indice) =>(
        <li className="header-link" key={indice}>{link} </li>))}
      </ul>
      <form onSubmit={handleSubmit} className="search-bar horizontal-alignment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input
          type="text"
          placeholder="Ex : Harry Potter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
