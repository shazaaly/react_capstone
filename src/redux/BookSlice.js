import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availableTimes: [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ],
  bookedTimes: [],

};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {

 
    updateTimes : (state, action) => {
      const time = action.payload;
      state.availableTimes = state.availableTimes.filter(t => t !== time);
      state.bookedTimes.push(time);
    },
    unbookTime: (state, action) => {
      const time = action.payload;
      state.availableTimes.push(time);
      state.bookedTimes = state.bookedTimes.filter(t => t !== time);
    }
  }
});

export const { updateTimes , unbookTime, initializeTimes } = bookingSlice.actions;

export default bookingSlice.reducer;
