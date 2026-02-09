import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CategoryPage from './pages/CategoryPage/CategoryPage';

const App = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route element={<Navigate replace to="/category" />} path="/" />
      <Route element={<CategoryPage />} path="/category" />
      {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
    <Footer />
  </React.Fragment>
);

export default App;
