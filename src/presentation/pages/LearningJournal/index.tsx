import { Setting } from '@/presentation/components/Setting';
import React, { FunctionComponent } from 'react';

import styles from './styles.module.css';

export const LearningJournal: FunctionComponent = () => {
  return (
    <section className="container">
      <h2>LearningJournal</h2>
      <Setting />
    </section>
  );
};
