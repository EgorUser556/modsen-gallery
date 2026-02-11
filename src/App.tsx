import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import CategoryPage from '@pages/CategoryPage/CategoryPage';
import FavouritePage from '@pages/FavouritePage/FavouritePage';
import ImagesPage from '@pages/ImagesPage/ImagesPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <Header />
    <ErrorBoundary>
      <Routes>
        <Route element={<Navigate replace to="/category" />} path="/" />
        <Route element={<CategoryPage />} path="/category" />
        <Route element={<ImagesPage />} path="/images" />
        <Route element={<FavouritePage />} path="/favourites" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </ErrorBoundary>
    <Footer />
  </React.Fragment>
);

export default App;
