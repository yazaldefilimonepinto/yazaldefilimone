import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
  const [activeMenu, SetActiveMenu] = React.useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="/" className={styles.logo}>
          Yazalde
        </a>

        <div className={styles.menu_container}>
          <ul className={activeMenu ? `${styles.menu_list} ${styles.showMenu}` : styles.menu_list}>
            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                Home
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="/about" className={styles.menu_link}>
                About me
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="/journal" className={styles.menu_link}>
                Learning Journal
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="/blog" className={styles.menu_link}>
                Blog
              </a>
            </li>
          </ul>
          <button className={styles.hamburger} onClick={() => SetActiveMenu(!activeMenu)}>
            <span className={activeMenu ? styles.active : ''}></span>
          </button>
        </div>
      </nav>
    </header>
  );
};
