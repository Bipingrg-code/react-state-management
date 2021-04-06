import React from 'react'

function Movie({name, price}) {


    return (
        <div>
           
                <li>{name}</li>
                <li>{price}</li>
        </div>
    )
}

export default Movie
