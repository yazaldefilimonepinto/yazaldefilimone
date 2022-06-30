import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter, Routes as Routers } from 'react-router-dom';
import { Home } from '@/presentation/pages/Home';
import { Header } from '@/presentation/components/Header/Index';

export const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers>
        <Route path="/" element={<Home />} />
      </Routers>
    </BrowserRouter>
  );
};
