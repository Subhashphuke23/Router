import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/item/:id" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;



