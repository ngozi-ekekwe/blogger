import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';

const login = () => {
  return (
    <DefaultLayout>
      <Authentication title="Login" />
    </DefaultLayout>
  );
};

export default login;