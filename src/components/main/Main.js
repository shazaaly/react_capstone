import React from 'react'
import { About } from '../pages/About/About'
import { Hero } from '../sections/hero_section/Hero'
import { Specials } from '../sections/specials/Specials'
import { Testimonials } from '../sections/testimonials/Testimonials'
import './main.css'

export const Main = () => {
  return (
    <div className=''>
      <main className='main'>
        <Hero />
        <Specials />
        <Testimonials />
        <About />

      </main>
    </div>
  )
}
