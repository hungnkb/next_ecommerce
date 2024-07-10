import { UserInfoType } from '@/common/type-response';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type AuthStateType = {
  userInfo: UserInfoType;
  isLogin: boolean;
};

const initialState: AuthStateType = {
  isLogin: false,
  userInfo: {
    id: '',
    username: '',
    name: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateInfo: (_, action: PayloadAction<AuthStateType>) => {
      return { ...action.payload };
    },
    clearAuth: () => {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateInfo, clearAuth } = authSlice.actions;

export default authSlice.reducer;
