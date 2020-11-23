import React, { useState, useContext } from "react";

import Movie from "./Movie";
import { MovieContext } from './MovieContext';

const MovieList = (props) => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {movies.map((movies) => (<Movie name={movies.name} price={movies.price} key={movies.id} />))}
        </div>
    );
};
export default MovieList;