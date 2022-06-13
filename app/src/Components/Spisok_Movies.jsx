import React from 'react'
import '../Styles/Spisok.css'
import Card from 'react-bootstrap/Card'
import '../Styles/Admin_Menu.css'
export const Spisok_Movies = (movieList) => {
  return (
      <>
    
    <Card className='spiscont'>
       <Card.Header className="title">Название: {movieList.cartProduct.title}</Card.Header>
       <div className="b">
    <img width='300px' src={movieList.cartProduct.img} alt="" className='imgc'/>
    <Card.Body className="info">
      <Card.Text className="title">Слоган: {movieList.cartProduct.slogan}</Card.Text>
      <Card.Text className="title">Возрастное ограничение: {movieList.cartProduct.age}+</Card.Text>
      <Card.Text className="ganr">Жанр: {movieList.cartProduct.ganr}</Card.Text>
      <Card.Text className="country">Страна производитель: {movieList.cartProduct.country}</Card.Text>
    </Card.Body>
    </div>
    </Card>
    </>
  )
}
