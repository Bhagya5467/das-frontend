import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'canceled';
}

interface AppointmentState {
  appointments: Appointment[];
}

const initialState: AppointmentState = {
  appointments: [],
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload;
    },
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    updateAppointmentStatus: (
      state,
      action: PayloadAction<{ id: string; status: 'confirmed' | 'canceled' }>
    ) => {
      const appointment = state.appointments.find(
        (a) => a.id === action.payload.id
      );
      if (appointment) {
        appointment.status = action.payload.status;
      }
    },
  },
});

export const { setAppointments, addAppointment, updateAppointmentStatus } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
