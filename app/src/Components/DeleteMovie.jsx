import React, {useState, useEffect} from 'react'
import { DeleteMovieList } from './DeleteMovieList'
import URL from '../config/server.js'
import { MovieLists } from './MovieLists'

export const DeleteMovie = () => {
  const url = URL.URL + "/del"
  const [data, setData] = useState([])
useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then(response=>setData(response.message))
    }, [])

  return (
    <>
      <DeleteMovieList MovieList={data}/>
    </>
  )
}
