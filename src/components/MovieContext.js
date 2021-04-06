import React, {useState, createContext} from 'react'


  export const MovieContext = createContext();

  export const MovieProvider = prop => {
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
        <MovieContext.Provider value={[movies, setMovies]}> 
            {prop.children}
        </MovieContext.Provider>
    )
}


