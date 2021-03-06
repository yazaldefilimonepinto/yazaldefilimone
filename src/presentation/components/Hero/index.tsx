import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';
import { getWeekOfMonth, getWeek } from 'date-fns';

export const Hero: FunctionComponent = () => {
  const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();
  const index = currentDate.getDay();
  let week = weeks[index];


  return (
    <section className={`${styles.hero} section`}>
      <div className={styles.container}>
        <span className={styles.happy}>Happy {week}!</span>
        <span className={styles.hello}> </span>
        <h1 className={styles.name}>I am Yazalde Filimone</h1>
        <span className={styles.work}>
          Software Developer at{' '}
          <a href="https://rgsistemas.com.br/" target="_blank" className={styles.style}>
            RG Sistemas
          </a>
        </span>
        <span className={styles.flow}>
          Following the flow of{' '}
          <span className={styles.style}>
            learning creating teaching <i className="ri-rocket-2-fill"></i>
          </span>
        </span>

        <span className={styles.local}>
          Inhambane Ceu, Mocambique <i className="ri-map-pin-line"></i>
        </span>
      </div>

      {/* <div className={styles.content}>
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
      </div> */}
    </section>
  );
};
