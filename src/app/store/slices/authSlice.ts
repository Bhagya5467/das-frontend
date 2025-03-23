import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserRole = 'doctor' | 'patient' | 'admin';

interface AuthState {
  email: string;
  role: UserRole | null;
}

const initialState: AuthState = {
  email: '',
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; role: UserRole }>
    ) => {
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.email = '';
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
