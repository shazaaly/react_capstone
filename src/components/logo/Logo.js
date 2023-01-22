import React from 'react'
import { Link } from 'react-router-dom'
import svg from '../../images/icons_assets/Logo.svg'
import './logo.css'

export const Logo = () => {
  return (
    <>
      <Link to='/'>
        <img className='logo' src={svg} alt='logo' />
      </Link>
    </>
  )
}
