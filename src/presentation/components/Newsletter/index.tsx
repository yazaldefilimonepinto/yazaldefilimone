import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';
type NewsletterProps = {
  SetActive: Function;
};
export const Newsletter: FunctionComponent<NewsletterProps> = ({ SetActive }) => {
  function handlerDisable() {
    SetActive(false);
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Subscribe to my Newsletters!</h3>
        <button onClick={handlerDisable}>
          <i className="ri-close-fill"></i>
        </button>
      </header>
      <div className={styles.content}>
        <div className={styles.input}>
          <i className="ri-mail-line"></i>
          <input type="email" required placeholder="Enter your email" />
        </div>
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};
