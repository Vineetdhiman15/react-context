import React, { useContext } from "react";
 import { MovieContext } from './MovieContext';

const NavBar = (props) => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div> <h3>Vineet</h3> <p>List of Movies : {movies.length}</p> </div>
    );
};
export default NavBar;