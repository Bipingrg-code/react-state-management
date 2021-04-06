// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import MovieList from './components/MovieList';
import Nav from './components/Nav'
import { MovieProvider } from './components/MovieContext';
import AddMovie from './components/AddMovie';

function App() {


return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
