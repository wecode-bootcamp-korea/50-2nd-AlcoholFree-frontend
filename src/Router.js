import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import Detail from './pages/Detail/Detail';
import Cost from './pages/Cost/Cost';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Cost" element={<Cost />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
