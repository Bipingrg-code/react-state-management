// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import MovieList from './components/MovieList';
import Nav from './components/Nav'
import { MovieProvider } from './components/MovieContext';

function App() {


return (
    <MovieProvider>
      <Nav />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
