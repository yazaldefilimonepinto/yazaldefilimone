import { Setting } from '@/presentation/components/Setting';
import React, { FunctionComponent } from 'react';

import styles from './styles.module.css';

export const Blog: FunctionComponent = () => {
  return (
    <section className="container">
      <h2>Blog</h2>
      <Setting />
    </section>
  );
};
