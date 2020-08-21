import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink className="navbar__item" to="/" exact>Главная</NavLink>
        <NavLink className="navbar__item" to="/story" >История</NavLink>
      </div>
    </>
  )
}
