import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';
import InputWrapper from '../components/InputWrapper';

const fields = [
  {
    label: 'Email',
    placeHolder: 'Enter your email',
    type: 'text'
  },
  {
    label: 'Password',
    placeHolder: 'password',
    type: "password"
  }
]

const login = () => {
  return (
    <DefaultLayout>
      <Authentication title="Login" buttonText="Login">
        {
          fields.map((field) => {
            return (
              <InputWrapper>
                <input placeholder={field.placeHolder} />
              </InputWrapper>
            )
          })
        }
      </Authentication>
    </DefaultLayout>
  );
};

export default login;