import React, { FunctionComponent, ReactNode } from 'react';

import styles from './styles.module.scss';

type ModalContainerProps = {
  children: ReactNode;
  SetActive: Function;
  active: boolean;
};
export const ModalContainer: FunctionComponent<ModalContainerProps> = ({
  children,
  SetActive,
  active,
}) => {
  return (
    <div className={active ? `${styles.container} ${styles.active}` : styles.container}>{children}</div>
  );
};
