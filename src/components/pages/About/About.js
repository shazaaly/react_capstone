import React from 'react'
import './about.css'
import chiefImgA from '../../../images/icons_assets/Mario_and_Adrian_A.jpg'
import chiefImgB from '../../../images/icons_assets/Mario_and_Adrian_B.jpg'

export const About = () => {
  return (
    <section id='about'>

      <div className='wrapper'>

        <div className='container aboutContain'>
          <div className='textZone'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum description Lorem ipsum description
              Lorem ipsum description Lore
              Lorem ipsum description Lorem ipsum description
              Lorem ipsum description Lore
              m ipsum description
              Lorem ipsum description Lorem ipsum description
              Lorem ipsum description Lorem ipsu
            </p>

          </div>

          <div className='imgZone'>
            <img id='chiefA' src={chiefImgA} alt='chief' />
            <img id='chiefB' src={chiefImgB} alt='chief' />

          </div>

        </div>
      </div>
    </section>
  )
}
