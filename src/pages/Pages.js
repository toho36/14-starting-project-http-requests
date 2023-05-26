import React from 'react';
import Home from './Home';
import User from './User';
import Searched from './Searched';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/User" element={<User />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
