import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.container}>
        <p className={styles.copy}>&#169; 2022 - Yazalde Filimone, all right reserved.</p>

        <div className={styles.content}>
          <ul>
            <li>
              <a href="">
                <i className="ri-github-line"></i>
                Github
              </a>
            </li>
            <li>
              <a href="">
                <i className="ri-twitter-line"></i>
                Twitter
              </a>
            </li>
            <li>
              <a href="">
                <i className="ri-linkedin-box-line"></i>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
