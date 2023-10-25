import React, { FC } from 'react';
import styles from './ContainmentContainer.module.css';

type ContainmentContainerProps = {
  children: React.ReactNode
};

const ContainmentContainer: FC<ContainmentContainerProps> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default ContainmentContainer;
