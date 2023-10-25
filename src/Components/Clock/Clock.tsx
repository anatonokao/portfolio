import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const getTime = () => {
    const currentDate:string = new Date().toLocaleString([], { hour12: true }).split(', ')[1];
    const period:string = currentDate.split(' ')[1];
    const time:string[] = currentDate.split(' ')[0].split(':');
    const hoursWithZero: string = time[0].length > 1 ? time[0] : `0${time[0]}`;
    const hours:string = hoursWithZero === '00'
      ? '12'
      : hoursWithZero;
    const minutes:string = time[1].length > 1 ? time[1] : `0${time[1]}`;
    const seconds:string = time[2].length > 1 ? time[2] : `0${time[2]}`;
    return {
      hours, minutes, seconds, period,
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.clock}>
      {time.hours}
      <span className={styles.separator}>:</span>
      {time.minutes}
      {' '}
      {time.period}
    </div>
  );
};

export default Clock;
