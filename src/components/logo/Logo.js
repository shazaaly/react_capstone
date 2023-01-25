import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import svg from '../../images/icons_assets/Logo.svg'
import './logo.css'

export const Logo = () => {
  return (
    <>
      <NavLink to='/'>
        <div>
          <img className='logo' src={svg} alt='logo' />
        </div>
      </NavLink>
    </>
  )
}
