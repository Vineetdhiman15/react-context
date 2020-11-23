import React from "react";
import NavBar from './NavBar';
import MovieList from "./MovieList";
import AddMovie from './AddMovie';
import { MovieProvider } from "./MovieContext";

export default class App extends React.Component {
  render() {
    return (
      <MovieProvider>
        <div className='app'>
          <NavBar />
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    );
  }
}