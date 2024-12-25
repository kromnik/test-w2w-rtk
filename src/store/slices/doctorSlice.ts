import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialDate from "../../data/db.json";
import { Doctor } from "../../assets/types";

interface DoctorState {
  doctors: Doctor[]
}

const initialState: DoctorState = {
  doctors: initialDate.doctors as Doctor[]
}

const doctorSlice = createSlice({
  name:'doctors',
  initialState,
  reducers: {
    addDoctor(state, action: PayloadAction<Doctor>) {
      state.doctors.push(action.payload)
    },
    editDoctor(state, action: PayloadAction<Doctor>) {
      const index = state.doctors.findIndex((doctor) => doctor.id === action.payload.id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    deleteDoctor(state, action: PayloadAction<number>) {
      state.doctors = state.doctors.filter((doctor) => doctor.id !== action.payload);
    },

  }
})

export const { addDoctor, editDoctor, deleteDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;