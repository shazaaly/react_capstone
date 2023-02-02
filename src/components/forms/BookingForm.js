import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTimes, unbookTime } from '../../redux/BookSlice'

import './bookingform.css'

export const BookingForm = () => {
    const navigate = useNavigate();

    const { availableTimes } = useSelector((state) => state.booking)

   
    const initializeTimes = (data) => {


    }
    useEffect(() => {
        initializeTimes()

    }, []);




    // console.log(bookedTimes);
    const [selectedTime, setSelectedTime] = useState('');
    const timeDispatch = useDispatch()

    const initialFormState = {
        date: Date.now(),

        time: '',
        guestsnum: 1,
        occasion: 'birthday',

    }
    const formReducer = (state, action) => {

        switch (action.type) {
            case 'INPUT_CHANGE':
                return {
                    ...state,
                    [action.field]: action.payload
                }
            case "SUBMIT": return state

            default: return state
        }

    }
    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    const handleInputChange = (e) => {
        dispatch({
            type: 'INPUT_CHANGE',
            field: e.target.name,
            payload: e.target.value

        })

    }

    const bookingHandler = (e) => {
        // console.log(selectedTime);

        e.preventDefault();
        timeDispatch(updateTimes(selectedTime))
        setSelectedTime('')
        dispatch({ type: 'SUBMIT' })
        navigate("/booking-confirmation");


        // alert(`${selectedTime} booked for you, Awesome!`)
    }


    return (
        <div aria-describedby="form to book a table" className='form_container container'>
            <h1>Book Now </h1>
            <form onSubmit={bookingHandler} style={{ "display": "grid", "maxWidth": "200px", "gap": "20px" }}>
                <label htmlFor="res-date" />Choose date
                <input name='date' value={formState.date} type="date" id="res-date" onChange={(e) => { handleInputChange(e) }} />
                <label htmlFor="res-time" />Choose time
                <select id="res-time " name='time' value={selectedTime} onChange={(e) => { setSelectedTime(e.target.value) }}>
                    <option value={null}>Choose time</option>
                    {


                        availableTimes?.map(time => <option key={time} value={time}>{time}</option>)

                    }

                </select>
                <label htmlFor="guests" />Number of guests
                <input name='guestsnum' value={formState.guestsnum || 1} type="number" onChange={(e) => { handleInputChange(e) }} placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion" />Occasion
                <select id="occasion" name='occasion' value={formState.occasion || 'birthday'} onChange={(e) => { handleInputChange(e) }}>
                    <option value='birthday'>Birthday</option>
                    <option value='anniversary'>Anniversary</option>
                </select>
                <button className='btn' type="submit" value="Make Your reservation" >Book Time</button>

            </form>


        </div>

    )
}
