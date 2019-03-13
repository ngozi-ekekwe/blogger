import React, { Fragment } from 'react';
import Header from '../components/Header';

const DefaultLayout = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default DefaultLayout;