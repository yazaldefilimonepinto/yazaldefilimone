import { Hero } from '@/presentation/components/Hero';
import React, { FunctionComponent } from 'react';

//import styles from './Home.module.css';

export const Home: FunctionComponent = () => {
  return (
    <article className="container h-5">
      <Hero />
    </article>
  );
};
