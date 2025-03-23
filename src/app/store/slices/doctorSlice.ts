import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Doctor {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: number;
  availableDates: string[];
}

interface DoctorState {
  doctors: Doctor[];
  currentDoctor: Doctor | null;
}

const initialState: DoctorState = {
  doctors: [],
  currentDoctor: null,
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
    },
    setCurrentDoctor: (state, action: PayloadAction<Doctor | null>) => {
      state.currentDoctor = action.payload;
    },
  },
});

export const { setDoctors, setCurrentDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
