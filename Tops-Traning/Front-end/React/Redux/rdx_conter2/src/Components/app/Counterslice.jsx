import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


  const initialState = {
    value: 2
  }


export const Counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      add:(state) => {
        state.value += 1
      },

      multi:(state)=> {
        state.value *= 2
      },

      sub: (state)=> {
        state.value -= 1
      }
  }
  
})


export const {add, multi, sub} = Counterslice.actions
export default Counterslice.reducer
