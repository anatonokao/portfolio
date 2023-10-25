import React from 'react';
import Clock from '../Clock/Clock';
import ChooseLang from './ChooseLang/ChooseLang';
import ContainmentContainer from '../ContainmentContainer/ContainmentContainer';
import Hello from './Hello/Hello';

const HomePage = () => (
  <ContainmentContainer>
    <Clock />
    <Hello lang="ru" />
    <ChooseLang lang="en" />
  </ContainmentContainer>
);

export default HomePage;
