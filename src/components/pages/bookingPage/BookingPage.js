import React, { useEffect } from 'react'
import './bookingpage.css'
import { BookingForm } from '../../forms/BookingForm'
import formImg from '../../../images/icons_assets/Mario_and_Adrian_A.jpg'

export const BookingPage = ({ values, setValues, setAvailableTimes, availableTimes
}) => {
  useEffect(() => {
        if (typeof values === "undefined") return;


  }, [values]);

  return (
    <div className='container book-container'>
      <img src={formImg} alt='reserve' />

      <BookingForm values={values} setValues={setValues}
        setAvailableTimes={setAvailableTimes}
        availableTimes={availableTimes}
      />
    </div>
  )
}
