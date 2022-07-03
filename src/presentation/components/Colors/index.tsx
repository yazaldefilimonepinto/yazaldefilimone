import React, { FunctionComponent } from 'react';

import styles from './styles.module.scss';

type ColorsProps = {
  active: boolean;
  SetActive: Function;
};
export const Colors: FunctionComponent<ColorsProps> = ({ active, SetActive }) => {
  const hueColor = {
    purple: 250,
    green: 142,
    blue: 230,
    pink: 340,
  };
  // document.body.style.setProperty('--color', 'green');

  /*
 
  
  HSL color mode 
  --first-color: hsl(var(--hue-color), 69%, 61%);
  */

  function handlerColor() {
    SetActive(!active);
  }

  return (
    <div className={active ? `${styles.container} ${styles.active}` : styles.container}>
      <span
        style={{ backgroundColor: `hsl(${hueColor.purple}, 69%, 61%)` }}
        className={styles.color}
        onClick={handlerColor}
      ></span>
      <span
        style={{ backgroundColor: `hsl(${hueColor.green}, 69%, 61%)` }}
        className={styles.color}
        onClick={handlerColor}
      ></span>
      <span
        style={{ backgroundColor: `hsl(${hueColor.blue}, 69%, 61%)` }}
        className={styles.color}
        onClick={handlerColor}
      ></span>
      <span
        style={{ backgroundColor: `hsl(${hueColor.pink}, 69%, 61%)` }}
        className={styles.color}
        onClick={handlerColor}
      ></span>
    </div>
  );
};
