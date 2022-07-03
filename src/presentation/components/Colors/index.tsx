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

  function handlerColor(hue: number) {
    changeColor(hue);
    SetActive(!active);
  }
  function changeColor(hue: number) {
    const html = document.querySelector('html');
    html?.style.setProperty('--hue-color', String(hue));
    console.log(html?.style.getPropertyValue('--hue-color'));
  }

  return (
    <div className={active ? `${styles.container} ${styles.active}` : styles.container}>
      <span
        style={{ backgroundColor: `hsl(${hueColor.purple}, 69%, 61%)` }}
        className={styles.color}
        onClick={() => handlerColor(hueColor.purple)}
      ></span>
      <span
        style={{ backgroundColor: `hsl(${hueColor.green}, 69%, 61%)` }}
        className={styles.color}
        onClick={() => handlerColor(hueColor.green)}
      ></span>
      <span
        style={{ backgroundColor: `hsl(${hueColor.blue}, 69%, 61%)` }}
        className={styles.color}
        onClick={() => handlerColor(hueColor.blue)}
      ></span>
      <span
        style={{ backgroundColor: `hsl(${hueColor.pink}, 69%, 61%)` }}
        className={styles.color}
        onClick={() => handlerColor(hueColor.pink)}
      ></span>
    </div>
  );
};
