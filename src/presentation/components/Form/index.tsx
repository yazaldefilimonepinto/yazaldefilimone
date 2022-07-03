import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Form: FunctionComponent = () => {
  return (
    <form className={styles.content}>
      <h2>Login Adm</h2>
      <div className={styles.container}>
        <div className={styles.input}>
          <input type="email" placeholder="Enter your email" />
          <i className="ri-mail-line"></i>
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Enter your password" />
          <i className="ri-lock-line"></i>
        </div>
        <button className={styles.button}>Login</button>
      </div>
    </form>
  );
};
