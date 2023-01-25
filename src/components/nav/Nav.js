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
          <a href="#about" end>
            About
          </a>
        </li>
        <li>
          <a href="/menu" end>
            Menu
          </a>
        </li>
        <li>
          <NavLink to="/reservations" end>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" end>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" end>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
