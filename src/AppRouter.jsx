import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Search from './Pages/Search';
import ContactUs from './Pages/ContactUs';
import RentalProp from '../src/Pages/RentalProp';
import PropertyPage from './Pages/PropertyPage';
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/rentalprop' element={<RentalProp />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/search" element={<Search />} />
            <Route path="/propertypage/:id" element={<PropertyPage />} />
        </Routes>
    );
};

export default AppRouter;    