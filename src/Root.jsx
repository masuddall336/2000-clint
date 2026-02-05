import React from 'react';
import Navbar from './pages/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './pages/footer/Footer';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;