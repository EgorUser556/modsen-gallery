import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import CategoryPage from '@pages/CategoryPage/CategoryPage';
import ImagesPage from '@pages/ImagesPage/ImagesPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route element={<Navigate replace to="/category" />} path="/" />
      <Route element={<CategoryPage />} path="/category" />
      <Route element={<ImagesPage />} path="/images" />
    </Routes>
    <Footer />
  </React.Fragment>
);

export default App;
