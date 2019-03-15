import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';

const signup = () => {
  return (
    <DefaultLayout>
      <Authentication title="Sign Up" />
    </DefaultLayout>
  );
};

export default signup;