/* eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    cars: ["Model 3","Model S","Model X","Model Y","Solar Roof","Solar Panels"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer