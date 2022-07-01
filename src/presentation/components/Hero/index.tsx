import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Hero: FunctionComponent = () => {
  return (
    <section className={`${styles.hero} section`}>
      <div className={styles.container}>
        <span className={styles.happy}>Happy Friday!</span>
        <span className={styles.hello}> </span>
        <h1 className={styles.name}>I am Yazalde Filimone</h1>
        <span className={styles.work}>
          Software Developer at <span className={styles.style}>Reaktor</span>
        </span>
        <span className={styles.flow}>
          Following the flow of{' '}
          <span className={styles.style}>
            learning creating teaching <i className="ri-rocket-2-fill"></i>
          </span>
        </span>
        <span className={styles.local}>
          <i className="ri-map-pin-line"></i>
          Inhambane Ceu, Mocambique
        </span>
      </div>

      <div className={styles.content}>
        <ul>
          <li>
            <a href="">
              <i className="ri-github-line"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="ri-twitter-line"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
