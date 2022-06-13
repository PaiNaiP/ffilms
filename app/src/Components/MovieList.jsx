import React, { useEffect, useState } from 'react'
import URL from '../config/server.js'
import { MovieLists } from './MovieLists.jsx'

export const MovieList = () => {
  const url = URL.URL + "/get"
  const [data, setData] = useState([])
  const [tp, setTP] = useState([])
useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then(response=>setData(response.message))
    setTP('Spisok')
    }, [])

  return (
    <>
    <div className="spisok-class">
      {/* <div className="image"><img width='400px' src={data.img} alt="" /></div>
      <div className="info">
        <div className="title">Название: {data.title}</div>
        <div className="title">Слоган: {data.slogan}</div>
        <div className="title">Возрастное ограничение: {data.age}+</div>
        <div className="ganr">Жанр: {data.ganr}</div>
        <div className="country">Страна производитель: {data.country}</div>
      </div>
       */}
       <MovieLists MovieList={data} Tip={tp}/>
       
    </div>
    </>
  )
}
