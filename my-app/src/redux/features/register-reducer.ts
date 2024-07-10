import { FormSignupType } from '@/components/auth/signup-modal';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: FormSignupType = {
  username: '',
  password: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    updateForm: (_, action: PayloadAction<FormSignupType>) => {
      return { ...action.payload };
    },
    clearForm: () => {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateForm, clearForm } = registerSlice.actions;

export default registerSlice.reducer;
