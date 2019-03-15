import React, { Fragment } from 'react';
import Header from '../components/Header';

const DefaultLayout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <div className="page-container">
        {children}
      </div>
    </Fragment>
  );
};

export default DefaultLayout;