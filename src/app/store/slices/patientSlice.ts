import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  medicalHistory?: string[];
}

interface PatientState {
  patients: Patient[];
  currentPatient: Patient | null;
}

const initialState: PatientState = {
  patients: [],
  currentPatient: null,
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
    },
    setCurrentPatient: (state, action: PayloadAction<Patient | null>) => {
      state.currentPatient = action.payload;
    },
  },
});

export const { setPatients, setCurrentPatient } = patientSlice.actions;
export default patientSlice.reducer;
