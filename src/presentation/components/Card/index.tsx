import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Card: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="https://raw.githubusercontent.com/yazaldefilimonepinto/portifolio/master/src/assets/img/portfolio1.jpg"
          alt=""
        />
      </div>
      <div className={styles.content}>
        <h3>Moderno WebSite</h3>
        <div className={styles.tech}>
          <ul>
            <li>FrontEnd</li>
            <li>backEnd</li>
            <li>FullStack</li>
          </ul>
        </div>
        <p>Website for a charity organization in order to share their mission, events, and team.</p>
        <div className={styles.link}>
          <a href="">
            <i className="ri-git-pull-request-line"></i>
          </a>
          <a href="">
            <i className="ri-link-m"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
