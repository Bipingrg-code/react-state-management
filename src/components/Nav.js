import React from 'react'

function Nav({movies}) {
    return (
        <div className="nav-container">
            <h1 className="logo">Hello:React</h1>
            {
                movies.map(movie => {
                    return `Price of List : ${movie.price}`
                })
            }
        </div>
    )
}

export default Nav
