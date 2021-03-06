import { MyLife } from '@/presentation/components/MyLife';
import { Setting } from '@/presentation/components/Setting';
import React, { FunctionComponent } from 'react';

// import styles from './styles.module.css';

export const AboutMe: FunctionComponent = () => {
  return (
    <section className="container">
      <MyLife />
      <Setting />
    </section>
  );
};
