import { Form } from '@/presentation/components/Form';
import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Login: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
};
