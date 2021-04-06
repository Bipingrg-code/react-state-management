// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import MovieList from './components/MovieList';
import Nav from './components/Nav'

function App() {
  const [movies, setMovies] = useState([
    {
        name : 'Avengers',
        price : '$100',
        id: 121
    },
    {
        name : 'Thor',
        price : '$120',
        id: 114
    },
    {
        name : 'Dr.Strangers',
        price : '$200',
        id: 124
    },
    {
        name : 'Captain America',
        price : '$220',
        id: 134
    }
]);

return (
    <div className="App">
        <Nav movies={movies}/>
        <MovieList movies={movies}/>
    </div>
  );
}

export default App;
