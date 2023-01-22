import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
  return (
    <nav >
      <ul className='navbar'>
        <li>
          <NavLink
            to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" end>
            Menu
          </NavLink>
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
