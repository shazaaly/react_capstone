import React from 'react'
import { Logo } from '../logo/Logo'
import { Nav } from '../nav/Nav'


export const Footer = () => {
  return (
    <footer>
      <Logo />
      <aside className='doormatNav'>
        <p>Doormat Navigation</p>
        <Nav />
      </aside>

      <aside className='contacts'>
        <p>Contacts</p>
        <div className='contacts'>
          <span>Address</span>
          <span>Phone Number</span>
          <span>Email</span>

        </div>

      </aside>

      <aside className='socialLinks'>
        <p>Social Media Links</p>
        <div className='social'>
          <span>
            <a href='https://www.facebook.com/' rel="noreferrer" target="_blank">Facebook</a>
          </span>
          <span>
            <a href='https://web.whatsapp.com/' rel="noreferrer" target="_blank">Whats app</a>
          </span>
          <span>
            <a href='https://twitter.com/' rel="noreferrer" target="_blank">Twitter</a>
          </span>
          <span>
            <a href='https://instagram.com/' rel="noreferrer" target="_blank">Instagram</a>
          </span>
        </div>

      </aside>

    </footer>
  )
}
