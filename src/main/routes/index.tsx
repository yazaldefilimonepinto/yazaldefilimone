import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter, Routes as Routers } from 'react-router-dom';
import { Home } from '@/presentation/pages/Home';

export const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />} />
      </Routers>
    </BrowserRouter>
  );
};
