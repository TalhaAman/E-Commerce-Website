import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import WorkshopListings from '../pages/home';
import WorkshopDetails from '../pages/productDetail';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<WorkshopListings/>} />
        <Route path='/workshop-details' element={<WorkshopDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;