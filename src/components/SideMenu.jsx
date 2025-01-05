import React, { useState } from "react";
import MovieGenres from "./TMDB_API/MovieGenres";
import "../styles/sideMenu.css";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

// const GenresList = (props) => {
//   const [listGenres, setListGenres] = useState([]);
//   return (
//     <div>
//       <MovieGenres setData={setListGenres} />
//       {listGenres && (
//         <div>
//           {/**Afficher la liste des genres*/}
//           <ul className="genres-list">
//             {listGenres.map((genre) => (
//               <li
//                 key={genre.id}
//                 onClick={() => (props.setShow(false), window.scrollTo(0, 0))}
//               >
//                 <NavLink
//                   className="navlink"
//                   to={`/movie-by-genre/${genre.name}/${genre.id}`}
//                 >
//                   {genre.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

const ShowMenuButton = (props) => {
  return (
    <div className="sideMenu-btn">
      <button onClick={props.handleShow} className="side-menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list position-sticky"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
    </div>
  );
};

const CloseMenuButton = (props) => {
  return (
    <div className="sideMenu-btn">
      <button onClick={props.handleShow} className="side-menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
    </div>
  );
};

const GenresList = () => {
  const [listGenres, setListGenres] = useState([]);
  return (
    <li className="header-link">
      <MovieGenres setData={setListGenres} />
      {listGenres && (
        <Dropdown>
          <Dropdown.Toggle variant="transparent" className="genres-list">
            Genres
          </Dropdown.Toggle>

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

const SideMenu = () => {
  const [show, setShow] = useState(false);

  const links = ["Home", "Films", "Séries"];

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="burger-menu">
      <ShowMenuButton handleShow={handleShow} />
      {show && (
        <div className="side-menu horizontal-alignment">
          <ul>
            <GenresList setShow={setShow} />
            {links.map((link) => (
              <li className="header-link">{link} </li>
            ))}
          </ul>
          <CloseMenuButton handleShow={handleShow} />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
