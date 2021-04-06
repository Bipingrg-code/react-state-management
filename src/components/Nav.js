import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'

function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="nav-container">
            <h1 className="logo">Hello:React</h1>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav
