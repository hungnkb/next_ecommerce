'use client';
import { AuthStateType, clearAuth, updateInfo } from '@/redux/features/auth-reducer';
import { authService } from '@/services/auth';
import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const CheckAuth = () => {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const checkAuth = async () => {
      if (accessToken) {
        const res = await authService.getMe(accessToken);
        dispatch(updateInfo({ userInfo: res, isLogin: true } as AuthStateType));
      } else {
        dispatch(clearAuth());
      }
    };
    checkAuth();
  }, [accessToken]);
  return <Fragment />;
};
