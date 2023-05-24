import React from 'react';
import Home from './Home';
import User from './User';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
