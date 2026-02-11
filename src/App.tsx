import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { routes } from '@constants/routes.ts';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <Header />
    <ErrorBoundary>
      <Routes>
        <Route element={<Navigate replace to="/category" />} path="/" />
        {routes.map(({ path, Component }) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
      </Routes>
    </ErrorBoundary>
    <Footer />
  </React.Fragment>
);

export default App;
