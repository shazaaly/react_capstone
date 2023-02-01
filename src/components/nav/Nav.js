import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = ({headerStyle}) => {

  return (
    <nav style={headerStyle} >
      <ul className='navbar'>
        <li>
          <NavLink
            to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <a href="#about" >
            About
          </a>
        </li>
        <li>
          <a href="/menu" >
            Menu
          </a>
        </li>
        <li>
          <NavLink to="/booking"  >
            Book a table
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" >
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
