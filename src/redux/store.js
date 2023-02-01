import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from './BookSlice'
export default configureStore({
    reducer: {
        booking: bookingReducer
    }
})