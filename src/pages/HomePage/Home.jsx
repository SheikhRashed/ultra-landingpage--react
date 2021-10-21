import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
