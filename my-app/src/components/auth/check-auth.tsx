'use client';
import { AuthStateType, clearAuth, updateInfo } from '@/redux/features/auth-reducer';
import { RootState } from '@/redux/store';
import { authService } from '@/services/auth';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CheckAuth = () => {
  const [token, setToken] = useState(null);
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const res = await authService.getMe(accessToken);
        dispatch(updateInfo({ userInfo: res, isLogin: true } as AuthStateType));
      } else {
        dispatch(clearAuth());
      }
    };
    checkAuth();
  }, [token, authState.isLogin]);
  return <Fragment />;
};
