import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from './slices/doctorSlice';
import nurseReducer from './slices/nurseSlice';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    nurses: nurseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;


