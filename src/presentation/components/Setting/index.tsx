import React, { FunctionComponent } from 'react';
import { Colors } from '@/presentation/components/Colors';

import styles from './styles.module.scss';

export const Setting: FunctionComponent = () => {
  const [active, SetActive] = React.useState(false);
  const [color, SetColor] = React.useState(false);

  function handlerActive() {
    SetActive(!active);
    SetColor(false);
  }
  function handlerColor() {
    SetColor(!color);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.button} onClick={handlerActive}>
          <i className="ri-settings-2-line"></i>
        </button>
        <ul className={active ? `${styles.content_list} ${styles.active}` : styles.content_list}>
          <li className={styles.action_container}>
            <button className={styles.action}>
              <i className="ri-admin-fill"></i>
            </button>
          </li>
          <li className={styles.action_container}>
            <button
              className={color ? `${styles.action} ${styles.actionColor}` : styles.action}
              onClick={handlerColor}
            >
              <i className={color ? `ri-shield-fill ${styles.actionColor}` : 'ri-shield-fill'}></i>
            </button>
            <Colors active={color} SetActive={SetColor} />
          </li>
          <li className={styles.action_container}>
            <button className={styles.action}>
              <i className="ri-mail-send-fill"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
