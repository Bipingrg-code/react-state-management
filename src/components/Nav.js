import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'

function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="nav-container">
            <h1 className="logo">Hello:React</h1>
            {
                movies.map(movie => {
                    return `Price of List : ${movie.length}`
                })
            }
        </div>
    )
}

export default Nav
