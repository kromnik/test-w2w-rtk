import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialDate from "../../data/db.json";
import { Nurse } from "../../assets/types";

interface NurseState {
  nurses: Nurse[]
}

const initialState: NurseState = {
  nurses: initialDate.nurses as Nurse[]
}

const nurseSlice = createSlice({
  name:'nurses',
  initialState,
  reducers: {
    addNurse(state, action: PayloadAction<Nurse>) {
      state.nurses.push(action.payload)
    },
    editNurse(state, action: PayloadAction<Nurse>) {
      const index = state.nurses.findIndex((nurse) => nurse.id === action.payload.id);
      if (index !== -1) {
        state.nurses[index] = action.payload;
      }
    },
    deleteNurse(state, action: PayloadAction<number>) {
      state.nurses = state.nurses.filter((nurse) => nurse.id !== action.payload);
    },

  }
})

export const { addNurse, editNurse, deleteNurse } = nurseSlice.actions;
export default nurseSlice.reducer;