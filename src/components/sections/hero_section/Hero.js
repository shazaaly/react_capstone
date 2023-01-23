import React from 'react'
import './hero.css'
import heroImage from '../../../images/icons_assets/restauranfood.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='imgContainer'>
        <img id='hero' src={heroImage} alt='restaurant' />

      </div>

      <div className='textContainer'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>In the buzz of the restaurant words can be challenging
          to catch, yet your body language and your deep soul
          are so easy to hear,
          feels as if I have entered a dreamland, the happy chatter,
          the fragrances, the easy and natural colours.
        </p>
        <button className='btn reserveBtn'>Reserve a table</button>

      </div>
    </div>
  )
}
