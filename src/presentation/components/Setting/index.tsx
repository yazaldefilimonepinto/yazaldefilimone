import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

export const Setting: FunctionComponent = () => {
  const [active, SetActive] = React.useState(false);

  function handlerActive() {
    SetActive(!active);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.button} onClick={handlerActive}>
          <i className="ri-settings-2-line"></i>
        </button>
        <ul className={active ? `${styles.content_list} ${styles.active}` : styles.content_list}>
          <li>
            <button className={styles.action}>
              <i className="ri-admin-fill"></i>
            </button>
          </li>
          <li>
            <button className={styles.action}>
              <i className="ri-shield-fill"></i>
            </button>
          </li>
          <li>
            <button className={styles.action}>
              <i className="ri-mail-send-fill"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
