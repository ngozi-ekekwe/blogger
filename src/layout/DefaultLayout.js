import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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