import React, { FC } from 'react';
import styles from './Hello.module.css';

type HelloProps = {
  lang: 'en' | 'ru'
};
const Hello: FC<HelloProps> = ({ lang }) => {
  if (lang === 'ru') {
    return (
      <div className={styles.helloText}>
        <span className={styles.h}>П</span>
        <span className={styles.e}>Р</span>
        <span className={styles.l}>И</span>
        <span className={styles.l2}>В</span>
        <span className={styles.o}>Е</span>
        <span className={styles.e}>Т</span>
      </div>
    );
  }
  return (
    <div className={styles.helloText}>
      <span className={styles.h}>h</span>
      <span className={styles.e}>e</span>
      <span className={styles.l}>l</span>
      <span className={styles.l2}>l</span>
      <span className={styles.o}>o</span>
    </div>
  );
};

export default Hello;
