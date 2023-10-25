import React, { FC } from 'react';
import styles from './ChooseLang.module.css';

type ChooseLangProps = {
  lang: 'ru' | 'en',
};

// eslint-disable-next-line react/function-component-definition
const ChooseLang: FC<ChooseLangProps> = ({ lang }) => (
  lang === 'en'
    ? (
      <div className={styles.container}>
        <div className={styles.chooseLang}>Choose your language</div>
        <button type="button" className={`${styles.en} ${styles.btn}`}>ENGLISH</button>
        <div className={styles.arrows}>
          <svg
            className={styles.arrowTop}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33331 8L7.99998 3.33333L12.6666 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={styles.arrowBottom}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 8L8.00002 12.6667L3.33335 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button type="button" className={`${styles.ru} ${styles.btn}`}>РУССКИЙ</button>
      </div>
    )

    : (
      <div className={styles.container}>
        <div className={styles.chooseLang}>Выберите язык</div>
        <button type="button" className={`${styles.en} ${styles.btn}`}>ENGLISH</button>
        <div className={styles.arrows}>
          <svg
            className={styles.arrowTop}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33331 8L7.99998 3.33333L12.6666 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={styles.arrowBottom}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 8L8.00002 12.6667L3.33335 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button type="button" className={`${styles.ru} ${styles.btn}`}>РУССКИЙ</button>
      </div>
    )

);

export default ChooseLang;
