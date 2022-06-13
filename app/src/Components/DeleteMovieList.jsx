import React from 'react'
import { Delete_List } from './Delete_List'

export const DeleteMovieList = (delMovList) => {
  return (
    <div>{delMovList.MovieList.map((cartMovie)=>(
        <Delete_List key={cartMovie.ID} cartProduct={cartMovie}/>
    ))}</div>
  )
}
