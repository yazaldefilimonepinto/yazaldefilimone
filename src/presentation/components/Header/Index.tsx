import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../NavLink';

import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
  const [activeMenu, SetActiveMenu] = React.useState(false);
  const headerLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Me',
      path: '/aboutMe',
    },
    {
      name: 'Learning Journal',
      path: '/learning-journal',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z" />
          </svg>
          Yazalde
        </Link>

        <div className={styles.menu_container}>
          <ul className={activeMenu ? `${styles.menu_list} ${styles.showMenu}` : styles.menu_list}>
            {headerLinks.map((link, key) => (
              <li key={key} className={styles.menu_item}>
                <NavLink path={link.path} name={link.name} />
              </li>
            ))}
          </ul>
          <button className={styles.hamburger} onClick={() => SetActiveMenu(!activeMenu)}>
            <span className={activeMenu ? styles.active : ''}></span>
          </button>
        </div>
      </nav>
    </header>
  );
};
