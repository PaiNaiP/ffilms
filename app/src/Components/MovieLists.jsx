import React from 'react'
import { Spisok_Movies } from './Spisok_Movies'

export const MovieLists = (movieList, del) => {
    return <div> {movieList.MovieList.map((cartMovie)=>(
        <Spisok_Movies key={cartMovie.ID} cartProduct={cartMovie} del={del}/>
    ))}
    </div>
}
