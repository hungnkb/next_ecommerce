import React from 'react';
import { NavbarComponent } from './navbar/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      {/* Thông báo - alert ( góc màn hình) */}
      <ToastContainer />
    </>
  );
};

export default Layout;
