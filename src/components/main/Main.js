import React from 'react'
import { Hero } from '../sections/hero_section/Hero'
import { Specials } from '../sections/specials/Specials'
import './main.css'

export const Main = () => {
  return (
    <div className=''>
      <main className='main'>
        <Hero />
        <Specials />

      </main>
    </div>
  )
}
