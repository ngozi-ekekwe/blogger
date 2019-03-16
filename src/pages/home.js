import React, { Fragment } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import LandingScreen from '../components/LandingScreen';


const home = () => {
  return (
    <DefaultLayout>
      <LandingScreen />
    </DefaultLayout>
  );
};

export default home;