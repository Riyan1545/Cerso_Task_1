import React from 'react';

import {Routes, Route} from "react-router-dom";

import MainLayout from '../layouts/MainLayout';

import Home from '../pages/home/home';

const AppRoutes = () => {
  return (
      <Routes>

        <Route element={<MainLayout />}>
            <Route path="/" element={<Home></Home>}></Route>
        </Route>

      </Routes>
  )
}

export default AppRoutes
