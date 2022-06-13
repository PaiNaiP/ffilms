import React from 'react'
import Admin_Menu from './Admin_Menu'
import { Navbar } from './Navbar'

export const Admin = () => {
  return (
    <>
    <Navbar /> 
    {/* вызов компонента с навигационном баром */}
    <Admin_Menu/>
    {/* вызов компонента с нижней частью страницы */}
    </>
  )
}
