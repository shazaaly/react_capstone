import React, { useState } from 'react'
import { BookingForm } from '../forms/BookingForm'
import { About } from '../pages/About/About'
import { BookingPage } from '../pages/bookingPage/BookingPage'
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
