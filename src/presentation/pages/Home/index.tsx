import { Hero } from '@/presentation/components/Hero';
import { Project } from '@/presentation/components/Project';
import React, { FunctionComponent } from 'react';

//import styles from './Home.module.css';

export const Home: FunctionComponent = () => {
  return (
    <article className="container h-5">
      <Hero />
      <Project />
    </article>
  );
};
