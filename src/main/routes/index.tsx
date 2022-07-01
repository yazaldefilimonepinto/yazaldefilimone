import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter, Routes as Routers } from 'react-router-dom';
import { Home } from '@/presentation/pages/Home';
import { Header } from '@/presentation/components/Header/Index';
import { AboutMe } from '@/presentation/pages/AboutMe';
import { LearningJournal } from '@/presentation/pages/LearningJournal';
import { Blog } from '@/presentation/pages/Blog';
import { Footer } from '@/presentation/components/Footer';

export const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/learning-journal" element={<LearningJournal />} />
        <Route path="/blog" element={<Blog />} />
      </Routers>
      <Footer />
    </BrowserRouter>
  );
};
