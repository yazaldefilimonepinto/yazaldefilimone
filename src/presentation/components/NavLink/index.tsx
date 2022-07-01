import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';
type NavLinkProps = {
  name: string;
  path: string;
};

export const NavLink: FunctionComponent<NavLinkProps> = ({ name, path }) => {
  const { pathname } = useLocation();

  return (
    <Link to={path} className={pathname === path ? `${styles.link} ${styles.active_link}` : styles.link}>
      {name}
    </Link>
  );
};
