import { Hero } from '@/presentation/components/Hero';
import { Project } from '@/presentation/components/Project';
import { Setting } from '@/presentation/components/Setting';
import React, { FunctionComponent } from 'react';

//import styles from './Home.module.css';

export const Home: FunctionComponent = () => {
  return (
    <article className="container h-5">
      <Hero />
      <Project />
      <Setting />
    </article>
  );
};
